import reportsForm from './js/reportsForm.js'; 
import reportsTable from './js/reportsTable.js'; 

const App = (function(){
    
    // DOM cache
    const formElement = document.querySelector('form');
    const reportsTableElement = document.querySelector('table');
    const tableBody = reportsTableElement.querySelector('tbody');  

    // State 
    const data = {
        reports: [],
        
        editReportId: null, 

        addReport(newReport){
            this.reports.push(newReport);  
        }, 

        deleteReport(id){
            const reporst = this.reports.filter(report => report.id.toString() !== id); 
            this.reports = reporst; 
        },

        editReport(id, updatedReport){
            const reports = this.reports.map(report => {
                if(id === report.id.toString()){
                    report = updatedReport; 
                    return report; 
                }
                return report; 
            }); 

            data.reports = reports; 
        },

        getReport(id){
            return this.reports.filter(report => report.id.toString() === id)[0];
        }
    }

    // Event listeners 
    formElement.addEventListener('submit', function(e){
        e.preventDefault(); 
        
        const newReport = reportsForm.getValuesFromForm(formElement, data.editReportId); 
        
        // Checks if in editmode or not 
        if(data.editReportId) {
            data.editReport(data.editReportId, newReport);
            data.editReportId = null;  
        } else {
            data.addReport(newReport); 
        }
        
        // Renders reports 
        reportsTable.renderReports(tableBody, data.reports);

        formElement.reset(); 
    }); 

    reportsTableElement.addEventListener('click', function(e){
        const { target } = e; 
        const { parentNode: reportContainer } = e.target.parentNode; 
        const reportId = reportContainer.dataset.id; 
        
        // Delete report
        if(target.parentNode.classList.contains('action-delete')) {
            data.deleteReport(reportId); 
            reportsTable.renderReports(tableBody, data.reports); 
        }

        // Edit report
        if(target.parentNode.classList.contains('action-edit')){
            data.editReportId = reportId;
            
            const reportToEdit = data.getReport(reportId); 
            reportsForm.populateForm(formElement, reportToEdit);  
        }
    })

})()