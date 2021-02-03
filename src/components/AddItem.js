import { useState } from 'react'

const AddItem = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [price, setPrice] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)
    const onSubmit = (e) => {
        e.preventDefault()

        if (!text) {
            alert('Please Add Item')
            return

        }
        onAdd({ text, price, day, reminder })
        setText('')
        setPrice('')
        setDay('')
        setReminder(false)

    }
    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Item</label>
                <input type='text' placeholder='Add Item' value={text} onChange={(e) => setText(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Price</label>
                <input type='text' placeholder='Add Price' value={price} onChange={(e) => setPrice(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Day and Time</label>
                <input type='text' placeholder='Add Day and Time' value={day} onChange={(e) => setDay(e.target.value)} />
            </div>
            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input type='checkbox' checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
            </div>

            <input type='submit' value='Save Item' className='btn btn-block' />
        </form>
    )
}

export default AddItem
