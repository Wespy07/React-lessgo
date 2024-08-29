const reactElement = {
    type: 'a',
    props: {
        href: 'https://www.google.com',
        target: '_blank'
    },
    children: 'Click here to visit google'
}

const mainCont = document.getElementById('root')

function customRender(reactElement, mainCont) {
    // const domElement = document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.children
    // domElement.setAttribute('href', reactElement.href)
    // domElement.setAttribute('target', reactElement.target)

    // mainCont.appendChild(domElement)
    
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    
    for (const prop in reactElement.props) {
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    
    mainCont.appendChild(domElement)
}

customRender(reactElement, mainCont)