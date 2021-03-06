// listen to submit button
var form = document.getElementById("wkrptForm");
form.onsubmit = function(e) {
    e.preventDefault(); // if it loads page right away the data will be lost
    
    studentName = form.fullName.value;
    if(studentName == "") {
        studentName = "John Doe";
    }
    
    department = form.department.value;
    if(department == "") {
        department = "mech";
    }
    
    subject = form.subject.value;
    if(subject == "") {
        subject = "Change me to subject";
    }

    street = form.street.value;
    if(street == "") {
        street = "123 Street St";
    }

    postal = form.postal.value;
    if(postal == "") {
        postal = "City, Province, P0S 1A1";
    }
    
    reportFile = form.reportDoc.value;
    if(isNotWordFile(reportFile)){
        alert("Please upload a .docx file");
    } else {

        // construct an aobject to be jsonified and sent to back-end
        let data = {
            studentName,
            department,
            subject,
            street,
            postal,
            reportFile
        }

        console.log(data)
    
        fetch("/format", {
            method: "POST",
            body: JSON.stringify(data)
        }).then(res => {
            console.log("Request complete! response:", res)
        })
    }
}

acceptedFileExtension = "docx";

// accepts file name/path and returns True if it is not a .docx file
function isNotWordFile(fileName) {

    extension = fileName.split('.').pop().toLowerCase();

    if(extension == acceptedFileExtension) {
        return false;
    } else {
        return true;
    }
}