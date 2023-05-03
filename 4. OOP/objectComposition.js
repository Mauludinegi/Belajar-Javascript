//Javascript can structuring code based on ability
class Developer {
    constructor(name) {
        this.name = name;
    }

    commitChanges() {
        console.log(`${this.name} is commiting changes...`);
    }
}

function canBuildUI(developer) {
    return {
        buildUI: () => {
            console.log(`${developer.name} is building UI...`);
        }
    }
}

function canBuildAPI(developer) {
    return {
        buildAPI: () => {
            console.log(`${developer.name} is building API...`);
        }
    }
}

function canDeployApp(developer) {
    return {
        deployApp: () => {
            console.log(`${developer.name} is deploying app...`);
        }
    }
}

//In javascript, we can easily composition object with method Object.assign().
function createFrontEndDeveloper(name) {
    const developer = new Developer(name);
    return Object.assign(developer, canBuildUI(developer));
}

function createBackEndDeveloper(name) {
    const developer = new Developer(name);
    return Object.assign(developer, canBuildAPI(developer));
}

function createDevOps(name) {
    const developer = new Developer(name);
    return Object.assign(developer, canDeployApp(developer));
}

function createFullStackDeveloper(name) {
    const developer = new Developer(name);
    return Object.assign(developer, canBuildUI(developer), canBuildAPI(developer), canDeployApp(developer));
}

const frontEndDeveloper = createFrontEndDeveloper('gie');
frontEndDeveloper.commitChanges();
frontEndDeveloper.buildUI();
console.log(`is ${frontEndDeveloper.name} developer?`, frontEndDeveloper instanceof Developer, '\n');

const backEndDeveloper = createBackEndDeveloper('gie');
backEndDeveloper.commitChanges();
backEndDeveloper.buildAPI();
console.log(`is ${backEndDeveloper.name} developer?`, backEndDeveloper instanceof Developer, '\n');

const devOpsDeveloper = createDevOps('Gie');
devOpsDeveloper.commitChanges();
devOpsDeveloper.deployApp();
console.log(`is ${devOpsDeveloper.name} developer?`, devOpsDeveloper instanceof Developer, '\n');

const fullStackDeveloper = createFullStackDeveloper('Mauludin');
fullStackDeveloper.buildUI();
fullStackDeveloper.buildAPI();
fullStackDeveloper.deployApp();
fullStackDeveloper.commitChanges();
console.log(`is ${fullStackDeveloper.name} developer?`, fullStackDeveloper instanceof Developer);