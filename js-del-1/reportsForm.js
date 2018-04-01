export default (function reportsForm() {


    return {
        getValuesFromForm(formElement, id = null){
            
            const reportId = id ? id : Date.now(); 
            const values = {
                id: reportId
            }; 
    
            const inputs = formElement.querySelectorAll('input'); 
            const selects = formElement.querySelectorAll('select'); 
            const textAreas = formElement.querySelectorAll('textarea'); 
        
            const all = [...inputs, ...selects, ...textAreas]; 
        
            all.forEach(element => {
                if(element.nodeName === 'INPUT' || element.nodeName === 'TEXTAREA') {
                    values[element.name] = element.value; 
                } else if (element.nodeName === 'SELECT') { 
                    values[element.name] = {text: element[element.selectedIndex].innerText, selectIndex: element.selectedIndex};
                }
            })
        
            return values; 
        }, 

        populateForm(formElement, report) {
            formElement.project.selectedIndex = report.project.selectIndex; 
            formElement.activity.selectedIndex = report.activity.selectIndex; 
            formElement.from.value = report.from; 
            formElement.to.value = report.to; 
            formElement.note.value = report.note; 
        }
    }

})()