class Tooltip {

}

class ProjectItem{
    constructor(id, uppdateProjectListFunction) {
        this.id = id;
        this.uppdateProjectListFunction = uppdateProjectListFunction;
        this.connectSwitchButton();
        this.connectMoreInfoButton();
    }

    connectMoreInfoButton() {

    }
    // method untuk button active saat user click
    connectSwitchButton() {
        const projectItemElement = document.getElementById(this.id);
        // variabel switchButton
        const switchButton = projectItemElement.querySelector(
            // DOM
            "button:last-of-type"
        );
        // dikasih event DOM
        switchButton.addEventListener("click", this.uppdateProjectListFunction);
    }
}

class ProjectList{
    // defind array (properti class)
    projects = [];

    constructor(type, switchHandlerFunction) {
        this.type = type;
        this.switchHandlerFunction = switchHandlerFunction;
        // DOM #active-project li (projectItems jamak karena returnya array)
        const projectItems = document.querySelectorAll(`#${type}-projects li`);
        // looping untuk mngambil data
        for (const ProjectItem of projectItems) {
            console.log(type);
            // memanggil properti class
            console.log(ProjectItem);
            // mengambil per projectItem
            this.projects.push(
                new ProjectItem(ProjectItem.id, this.switchProject.bind(this))
            );
        }
    }

    // getter setter method
    setSwitchHandlerFunction(switchHandlerFunction) {
        this.switchHandler = switchHandlerFunction;
    }

    // method untuk didalam projectList
    addProject(){}

    switchProject() {
        // memanggil addProject
        this.addProject();
        // this.projects = this.projects.findIndex((i) => i.id === projectId);
        // console.log(projects);
        //kontruktor switchHandlerFunction
        this.switchHandlerFunction(
            this.projects.find((i) => i.id === projectId)
        );

        //mencari index dari data pengkondisian
        // const projectIndex = this.projects.findIndex(i => i.id === projectId);
        // splice untuk array (manipulasi data)
        // this.projects.splice();
    }
}

class App {
    static init() {
        // sesuai id di index.html
        // panggil class
        const activeProjectList = new ProjectList("active")
        const finishesProjectList = new ProjectList("finished")
        // panggil setter
        activeProjectList.setSwitchHandlerFunction(
            finishesProjectList.addProject.bind()
        );
    }
}

App.init();