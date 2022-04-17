const twitter = {
    user: "Rami",
    trendingtopic: "deportes",
    hastag: "#lomejor",
    likes: 100,
    rt: 199,
    messages: 299,
    ubicacion: "Mexico",
   
    getperfil: function(){
      return `perfil de ${this.user}`
    },
    getTopicoshastag: function(){
        return `Trending:  ${this.trendingtopic} | Hastag: ${this.hastag}`
      },

      getlikesrt: function(){
        return `Likes: ${this.likes} Rt: ${this.rt}`
      },
    getUbica: function(){
        return `Es de: ${this.ubicacion} `
      }
   }

   console.log("Estas en Twitter en : "+twitter.getperfil());
   console.log("Tendencias actuales:  "+twitter.getTopicoshastag());
   console.log(twitter.getlikesrt());
   console.log(twitter.getUbica());



   const facebook = {
    user: "Rami",
    edad: 20,
    post: "lo mejor",
    likes: 100,
    comment: 199,
    messages: 299,
    ubicacion: "Mexico",
   
    getperfil: function(){
      return `perfil de ${this.user} edad: ${this.edad}`
    },
    getpost: function(){
        return `Publicacion es :  ${this.post}`
      },

      getlikes: function(){
        return `Likes: ${this.likes} `
      },
    getUbica: function(){
        return `Es de: ${this.ubicacion} `
      }
   }

   console.log("Estas en Facebook en : "+facebook.getperfil());
   console.log("Su "+facebook.getpost());
   console.log(facebook.getlikes());
   console.log(facebook.getUbica());