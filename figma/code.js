console.clear()
figma.showUI(__html__, { width: 895, height: 500 }) // Update the canvas dimensions here

figma.ui.onmessage = async (msg) => {
    if (msg.type === 'hi') {
        console.log('Hi from Figma API')
    }
}
