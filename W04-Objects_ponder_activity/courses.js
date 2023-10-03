
const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [
            {sectionNum: 1, roomNum:  "STC 353", enrolled: 26, days: "TTh", instructor: "Bro T"},  
            {sectionNum: 2, roomNum: "STC 347", enrolled: 28, days: "TTh", instructor: "Sis A"},
        ],
    enrollStudent: function (sectionNum) {
        const sectionIndex = this.sections.findIndex((section) =>
            section.sectionNum == sectionNum
        );
        console.log(sectionIndex);
        if(sectionIndex >=0){
            this.sections[sectionIndex].enrolled += 1;
            displaySections(this.sections);
        }
    },
    dropStudent: function (sectionNum) {
        const sectionIndex = this.sections.findIndex((section) =>
            section.sectionNum == sectionNum
        );
        if(sectionIndex >= 0){
            this.sections[sectionIndex].enrolled -= 1;
            displaySections(this.sections);
        }
    },
    enrrolmentUpdate: function (sectionNum, add = true) {
        const sectionIndex = this.sections.findIndex((section) =>
            section.sectionNum == sectionNum
        );
        if (sectionIndex >= 0){
            
            if (add){

                this.sections[sectionIndex].enrolled +=1;
            }
            else{
                this.sections[sectionIndex].enrolled -=1;
            }
            displaySections(this.sections);
        }
    }
};

function showInfo(course){
    document.querySelector("#courseName").innerHTML = course.name;
    document.querySelector("#courseCode").innerHTML = course.code;
}

function displaySections(sections){

    const tbody = document.querySelector("#sections");
    tbody.innerHTML = "";
    
    sections.map(selectedSection =>{

        const line = 
            `<tr>
                <td>${selectedSection.sectionNum}</td>
                <td>${selectedSection.roomNum}</td>
                <td>${selectedSection.enrolled}</td>
                <td>${selectedSection.days}</td>
                <td>${selectedSection.instructor}</td>
            </tr>`;
        
        tbody.innerHTML+=line;
    });
}

showInfo(aCourse);
displaySections(aCourse.sections);



//Activity 2

/*document.querySelector("#enrollStudent").addEventListener("click",(event)=>{
    const inputSection = document.querySelector("#sectionNumber").value;

    aCourse.enrollStudent(inputSection);
});*/

document.querySelector("#enrollStudent").addEventListener("click",(event)=>{
    const inputSection = document.querySelector("#sectionNumber").value;

    aCourse.enrrolmentUpdate(inputSection);
});

document.querySelector("#dropStudent").addEventListener("click", (event)=>{
    const inputSection = document.querySelector("#sectionNumber").value;

    aCourse.enrrolmentUpdate(inputSection, false);
});