export default (function reportsTable() {

    function reportHtml(report){
        return `
            <tr data-id=${report.id}>
                <td>${report.project.text}</td>
                <td>${report.activity.text}</td>
                <td>${report.from}</td>
                <td>${report.to}</td>
                <td>${report.note}</td>
                <td class="action-edit hide-text">Redigera<i></i></td>
                <td class="action-delete hide-text">Ta bort<i></i></td>
            </tr>
        `
    } 

    function renderReports(domElement, reports){
        if(reports) {
            const html = reports.map(report => {
                return reportHtml(report); 
            }).join(''); 

            domElement.innerHTML = html; 
        }
        console.log('rendered reports:', reports); 
    }

    return {
        reportHtml, 
        renderReports
    }

})()