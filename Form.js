class Form{
    constructor(){
        this.input=createInput("name")
        this.button=createButton("play")
        this.greeting=createElement('h3')
    }
    hide(){
        this.button.hide()
       this.input.hide()
        this.greeting.hide()
    }


    display(){
        var title=createElement('h2')
        title.html('car racing game ')
        title.position(130,0)
      
       
        input.position(130,160)
        button.position(150,200)
        button.mousePressed(()=>{
            this.button.hide()
           this.input.hide()
             player.name=this.input.value()
            player.update(name)
            playerCount+=1
            player.updateCount(playerCount)
            
           this.greeting.html("hello "+player.name)
           this.greeting.position(130,0)
        }) 
    }
}