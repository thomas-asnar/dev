import oracledb from 'oracledb'
import dbconfig from '../config/dbconfig'


export default class Stat {
  
  constructor(req){
    this.table = "STATS"
    this.env = req.query.env
    this.app = req.query.app
    this.job = req.query.job
  }

  _buildWhere(){
    this.bindings = {}
    this.where = ""
    let whereConstruct = []

    let elements = ['env', 'app', 'job']
    elements.forEach((element) => { 
      
      // si l'élement existe, on le bind et on ajoute à la requête where
      if(this[element] !== undefined){

        // Bindings
        this.bindings[element] = { "val": this[element]}

        // Where
        whereConstruct.push(`${element} = :${element}`)
      }
    })

    if(whereConstruct.length > 0){
      this.where = "WHERE " + whereConstruct.join(" AND ")
    }
     
  }

  // Doit être appelée avec une Promise
  /*
    let p1 = new Promise((resolve, reject) => jobStat.getLast(resolve, reject))
    p1.then(result => console.log(result)) 
  */
  getLast(resolve, reject){
    this._buildWhere()
    oracledb.getConnection(dbconfig)
      .then(conn => {
        conn.execute(
          `SELECT * FROM ${this.table}
          ${this.where}
          `,
          this.bindings
        ).then(result => {
          resolve(result)
        })
      })
      .catch(error => {
        reject(error)
      })
  }
  
}
