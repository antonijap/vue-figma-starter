const readline = require('readline')
const fs = require('fs')
const shell = require('shelljs')
const chalk = require('chalk')

const jsonFilePath = './manifest.json'

function askQuestion(query) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    })

    return new Promise((resolve) =>
        rl.question(query, (ans) => {
            rl.close()
            resolve(ans)
        })
    )
}

async function modifyJson() {
    let data = fs.readFileSync(jsonFilePath, 'utf8')
    let jsonFile = JSON.parse(data)

    let randomNumber = Math.floor(Math.random() * 90000) + 10000
    jsonFile.id = randomNumber.toString()

    let pluginName = await askQuestion('What is the plugin name? ')

    if (pluginName.trim() !== '') {
        jsonFile.name = pluginName

        // read the package.json
        let packageData = fs.readFileSync('./package.json', 'utf8')
        let packageJson = JSON.parse(packageData)

        // convert pluginName to lowercase and replace spaces with hyphens
        let packageName = pluginName.toLowerCase().replace(/\s+/g, '-')

        // update the package name
        packageJson.name = packageName

        // write the package.json back to file
        fs.writeFileSync('./package.json', JSON.stringify(packageJson, null, 2), 'utf8')
    }

    fs.writeFileSync(jsonFilePath, JSON.stringify(jsonFile, null, 2), 'utf8')

    return
}

function resetGit() {
    shell.rm('-rf', '.git')
    shell.exec('git init > /dev/null 2>&1')
    shell.exec('git add . > /dev/null 2>&1')
    shell.exec('git commit -m "Initial commit" > /dev/null 2>&1')
}

async function main() {
    await modifyJson()
    resetGit()
    console.log(chalk.green('You are ready to start developing Figma plugin'))
}

main()
