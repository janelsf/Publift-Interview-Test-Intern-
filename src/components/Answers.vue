<template>
  <div class="hello">
    <div><span>Question 1:</span><span>{{question1}}</span></div>
    <p><span>Question 2:</span>
    <input v-model='content' placeholder='edit and then press' @keyup.enter='getQuestion2'></input>
    <p><span>url: </span>{{question2}}</p></p>
    <div><span>Question 3:</span>
    <input type='file' accept='image/png, image/svg' v-on:change="onFileChange"></input>
    <button @click='save'>Save</button>
    <img :src="image"></div>

  </div>
</template>

<script>
import {question1, question2, question3} from './../api/api.js'
export default {
  name: 'Answers',
  data () {
    return {
      question1: '',
      question2: '',
      content: '',
      image: ''

    }
  },
  methods: {
    getQuestion1 () {
      question1().then(res => {
        this.question1 = res.data
        })
    },
    getQuestion2 () {
      question2({content: this.content}).then(res=>{
        this.question2 = res.data
      })

    },
    onFileChange(e) {
      let files = e.target.files || e.dataTransfer.files
      if (!files.length) {
        return
      }
      this.createImage(files[0]);
      
    },
    createImage(file) {
      let reader = new FileReader();
      let vm = this;
      reader.onload = (e) => {
        vm.image = e.target.result;
        };
      reader.readAsDataURL(file);
      },

    save () {
      question3({
        image: this.image
        }).then(res => {
          console.log(res.data)
        })
    }
  },
  mounted () {
    this.getQuestion1()
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
span {
  font: 22px bold;
}
</style>
