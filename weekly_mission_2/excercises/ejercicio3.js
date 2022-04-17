
class repor {
    constructor(name,author, title, titlepull){
    
    this.name = name
    this.author = author
    this.language = "JavaScript"
    this.numberOfCommits= 100
    this.stars= 199
    this.forks= 299,
    this.issues_open= 10
    this.issues_close= 10
   
    this.title= title
    this.repositoryNameAssociated= "repositoriodeRamiro"
    this.status= "open"
    this.numberOfComments= 34
    this.labels= "ayuda"
    this.dateCreated= "22-02-2022"
    this.lastUpdated= "22-02-2022"

    this.titlepull= titlepull
    this.branchName= "main"
    this.repositoryNameAssociated= "fromramirozs"
    }
   
    getInfo(){
       return `Nombre Organizacion: ${this.name} | Repositorio de:  ${this.author} | Total de commits: ${this.numberOfCommits} | Nombre Issue: ${this.title}   Status: ${this.status} |  NombrePull ${this.titlepull}   Status: ${this.status}`  
    }    
  
   }
   
   console.log("---------------clase-----------------")
   const myPR1 = new repor("LaunchX", "Ramiro", "live", "primerpull")
   console.log(myPR1.getInfo())
   
