class Tooltip {}

class ProjectItem {
    constructor(id, updateProjectListsFunction) {
        this.id = id;
        this.updateProjectListsHandler = updateProjectListsFunction;
        this.connectMoreInfoButton();
        this.connectSwitchButton();
    }

    connectMoreInfoButton() {
        // Implementasi button untuk info tambahan
    }
        // method untuk button active saat user click
    connectSwitchButton() {
        const projectItemElement = document.getElementById(this.id);
        // variabel switchButton
        const switchBtn = projectItemElement.querySelector(
        // DOM
        "button:last-of-type"
        );
        // dikasih event DOM dengan binding this
        switchBtn.addEventListener("click", this.updateProjectListsHandler.bind(null, this.id));
    }
}

class ProjectList {
    // defind array (properti class)
    projects = [];
  
    constructor(type) {
      this.type = type;
      // DOM #active-project li (projectItems jamak karena returnya array)
      const prjItems = document.querySelectorAll(`#${type}-projects li`);
      // looping untuk mengambil data
      for (const prjItem of prjItems) {
        // mengambil per projectItem
        this.projects.push(
          new ProjectItem(prjItem.id, this.switchProject.bind(this))
        );
      }
      // memanggil properti class
      console.log(this.projects);
    }

    // getter setter method
    setSwitchHandlerFunction(switchHandlerFunction) {
        this.switchHandler = switchHandlerFunction;
    }

    // method untuk didalam projectList
    addProject() {
        console.log(this);
    }

    switchProject(projectId) {
        // this.projects = this.projects.findIndex((i) => i.id === projectId);
        // console.log(projects);
        //mencari index dari data pengkondisian
        // const projectIndex = this.projects.findIndex(i => i.id === projectId);
        // splice untuk array (manipulasi data)
        // this.projects.splice();
        this.project = this.projects.find((i) => i.id === projectId);
        this.projects.filter((i) => i.id !== projectId);
      }
    }

class App {
    static init() {
        // sesuai id di index.html
        // panggil class
        const activeProjectsList = new ProjectList("active");
        const finishedProjectsList = new ProjectList("finished");
        // panggil setter
        activeProjectsList.setSwitchHandlerFunction(
            finishedProjectsList.addProject.bind(finishedProjectsList)
        );
        finishedProjectsList.setSwitchHandlerFunction(
            activeProjectsList.addProject.bind(activeProjectsList)
        );
    }
}

App.init();