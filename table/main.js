document.addEventListener("DOMContentLoaded", () => {

    const pickerButtons = document.querySelectorAll('.pickerButton')
    const dateRange = document.getElementById('date-range')
    
    pickerButtons?.forEach(btn => {
        flatpickr(`#${btn.getAttribute('id')}`, {
            enableTime: false,
            dateFormat: "Y-m-d H:i",
            onChange: function (selectedDates, dateStr, instance) {
                dateRange.innerHTML = `${btn.getAttribute('name')} - <b> ${dateStr}</b>`
                console.log({
                    selectedDates,
                    dateStr,
                    instance,
                    btn:btn.getAttribute('id')
                })
            },
        });

    })

})

const bodyTable = document.getElementById('table-body')
const picker = document.getElementById('picker')


const persons = [
    {
        id: 1,
        name: 'Mars',

    },
    {
        id: 2,
        name: 'Mark'
    },
    {
        id: 3,
        name: 'Mir'
    }
]



persons.forEach((person) => {
    bodyTable.innerHTML += `
                <tr>
                    <th scope="row">${person.id}</th>
                    <td>${person.name}</td>
                    <td>${person.name}@gmail.com</td>
                    <td>
                        <button 
                            id="${person.name}"
                            name="${person.name}"
                            class="btn btn-info pickerButton">
                                Calendar
                        </button>
                    </td>
                </tr>
            `
})

