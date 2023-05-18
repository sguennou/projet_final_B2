import { useState } from "react"

const CommandInput = (props) => {
  const [command, setCommand] = useState("")
  const [options, setOptions] = useState("")
  const submit = props.onSubmit
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("Command: ", command)
    console.log("Options: ", options)
    submit({ command, options })
  }

  return (
    <div className="p-16 rounded-lg border-2 border-black-400 max-w-max mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col justify-center ">
        <div className="text-black-400">
          Votre commande 👨‍💻:
          <input
            className="commandinput-input placeholder-black-400 border-2 border-black-900 font-bold"
            placeholder="Commande"
            type="text"
            value={command}
            onChange={(event) => setCommand(event.target.value)}
          />
        </div>
        <div className="text-black-400 mt-2">
          Options⚙️ :
          <input
            className="commandinput-input placeholder-black-400 border-2 border-black-900 font-bold"
            placeholder="Options"
            type="text"
            value={options}
            onChange={(event) => setOptions(event.target.value)}
          />
        </div>
        <button
          className="mx-auto mt-2 p-1 font-bold text-black-400 bg-blue-300 hover:font-bold hover:bg-blue-400 active:bg-blue-500 px-2 rounded-lg border border-black-900"
          type="submit"
          value="c'est parti 🚀"
        >
          c'est parti 🚀
        </button>
      </form>
    </div>
  )
}

export default CommandInput
