
const loadingAction = (x) => ({ state }) => state.set('loading', x)

const fetchData = ({ input, state, path }) => {
    fetch('http://asdasdasd')
        .then(items => path.success({ items }))
        .catch(err => path.error({ err: err.message }))
}

const setError = ({ input, state }) => state.set('error', input.err)
const setItems = ({ input, state }) => state.set('app.items', input.items)

const loginClicked = [
    loadingAction(true),
    [
        fetchData, {
            success: [ setItems ],
            error: [ setError ]
        }
    ],
    loadingAction(false)
]

loginClicked({ username: 'andrei', pass: 'asdasd' })

<app(props, box) export default>
    <section switch(page)>
        <div case='home' text>Hello ${xxx} world</div>
        <div case='contact'>
            <h1>"Contct"</h1>
            <list-item id=1 filter='foo' />
        </div>
        <p default>foo foo<p>
    </section>
    <button on-click=loginClicked>'Login'</button
    <button on-click=[render, { page: 'contact' }] text>contact</button>
</app>

<render(props = { page: 'home' })>
    <sss root=document.body page=state.page />
</render>

app = firebase.database('asdsadsd/asdasd')

export const state = {
    items: 'app.items'
}

app.set('app.items', [1,2,3])

app.onValue('app.items', snap => {
    render({
        page: 'videos',
        items: snap.val()
    })
})

app.onChildAdded('app.items', )
