const { ethereum } = window

export function Metamask () {
    const [conectar, setConnection] = useState("Connect")
    async function Connect() {
      if (ethereum != undefined) {
        ethereum.request({ method: 'eth_requestAccounts' }).then(cuentas => {
          console.log(cuentas)
          console.log(cuentas[0])
          setConnection(cuentas[0])
          ethereum.on("accountsChanged", (cuentas) => {
            if (cuentas.length == 0) {
              setConnection("Connect")
            } else {
              setConnection(cuentas[0])
            }
            console.log("Nueva cuenta detectada: " + cuentas)
          })
  
          ethereum.on('chainChanged', (chainId) => {
            console.log("Chain ID: " + chainId);
          });
        }).catch(function (reason) {
        });
      } else {
        console.log("No se ha detectado Metamask instalado")
      }
    }
}