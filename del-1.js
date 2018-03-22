
function eventHtml(event){
    return `
        <tr data-id=${event.id}>
            <td>${event.project.text}</td>
            <td>${event.activity.text}</td>
            <td>${event.time.from}</td>
            <td>${event.time.to}</td>
            <td>${event.note}</td>
            <td class="action-edit hide-text">Redigera<i></i></td>
            <td class="action-delete hide-text">Ta bort<i></i></td>
        </tr>
    `; 
}

function renderEvents (domElement, events) {
    domElement.innerHTML = ""; 

    if(events) {
        events.forEach(event => {
            domElement.innerHTML += eventHtml(event); 
        })    
    }
}

function newEvent(formElement){
    return {
        id: Date.now(),
        project: { text: form.project[form.project.selectedIndex].innerText, index: form.project.selectedIndex},
        activity: { text: form.activity[form.activity.selectedIndex].innerText, index: form.activity.selectedIndex},
        time: { from: form.from.value, to: form.to.value}, 
        note: form.note.value,
        billable: true 
    }
}

function deleteEventAndGetRemaining(events, id) {
    return events.filter(element => element.id.toString() !== id);
}

function editEvent(id) {
    const eventToEdit = state.events.filter(event => event.id.toString() === id)[0]; 
    populateForm(form, eventToEdit);
    state.selectedEventId = eventToEdit.id;  
}

function populateForm(form, event) {
    form.project.selectedIndex = event.project.index; 
    form.activity.selectedIndex = event.activity.index; 
    form.from.value = event.time.from; 
    form.to.value = event.time.to; 
    form.note.value = event.note; 
}

const state = {
    events: [],
    selectedEventId: null
}; 

// DOM elements 
const form = document.querySelector('.report'); 
const table = document.querySelector('table tbody'); 
const deleteEventBtn = table.querySelector('.action-delete'); 

// Eventlisteners 
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // add event 
    state.events.push(newEvent(form)); 
    renderEvents(table, state.events); 
    form.reset(); 

})

table.addEventListener('click', (e) => {
    
    // delete event
    if(e.target.classList.contains('action-delete') || e.target.parentNode.classList.contains('action-delete')) {
        
        const { id } = e.target.parentNode.parentNode.dataset; 
        
        if(confirm('Är du säker på att du vill ta bort den valda tiden?')) {
            state.events = deleteEventAndGetRemaining(state.events, id); 
            renderEvents(table, state.events)
        }
    }

    // edit event (in progress) 
    if(e.target.classList.contains('action-edit') || e.target.parentNode.classList.contains('action-edit')) {
        const { id } = e.target.parentNode.parentNode.dataset; 
        editEvent(id)
    }
})