import ToDoListItem from '../components/ToDoListItem'
import styles from './Home.module.css'

function Home() {

    const itemsArray = [
        {
            id: 1,
            text: 'Acordar 6 da manhã',
            checked: false
        },
        {
            id: 2,
            text: 'Lavar toda a louça suja',
            checked: false
        },
        {
            id: 3,
            text: 'Passear com os cachorros por meia hora',
            checked: false
        },
        {
            id: 4,
            text: 'Lavar o carro inteiro',
            checked: false
        }
    ]

    function changeCheckedState(id, checked) {

        itemsArray[itemsArray.findIndex(item => {
            return item.id == id
        })].checked = checked

        localStorage.setItem("itemsArray", JSON.stringify(itemsArray))

    }




    return (
        <div className={styles.homeContainer}>
            {itemsArray.map(({ id, text, checked }) => {
                return <ToDoListItem key={id} id={id} text={text} changeCheckedState={changeCheckedState} checked={checked} />

            })}
        </div>
    )
}

export default Home

