import NavBar from "@/components/Navbar"

function Command() {
  return (
    <div>
      <NavBar />
      <h1 className="text-center text-black-500 text-4xl font-bold mt-10">
        Commandes Nmap disponibles👨‍💻🔍
      </h1>

      <p className="text-black-600 text-xl">
        Les commandes Nmap offrent une palette d'outils de sécurité réseau
        puissants pour explorer et auditer les réseaux, avec des fonctionnalités
        allant de la détection de ports à la cartographie de réseaux, pour une
        analyse complète et approfondie 🛡️🔍🌐💻🔒
      </p>
    </div>
  )
}

export default Command
