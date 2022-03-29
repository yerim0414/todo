<template>
  <div>
    <div class="itemBox" v-for="(element) in values" :key="element.id">
      <div class="itemHeader">
        <div class="title">
          {{element.name}}
        </div>
        <div class="toggle">
          ⋯
        </div>
      </div>
      <div class="itemBody">  
        <div class="dragable">
          <div class="item" v-for="(item) in element.rows" :key="item.id">
            <div>{{item.name}}</div>
            <div class="edit">
              <div><font-awesome-icon icon="fa-regular fa-edit"/></div>
            </div>
          </div>
        </div>
      </div>
      <div class="itemFooter">
        <div class="btnBox" v-if="element.mode==0" @click="element.mode=1">
          <div class="btn">
          + Add another card
          </div>
          <div class="btn-img">
            <font-awesome-icon icon="fa-regular fa-note-sticky" />
          </div>
        </div>
        <div class="regBox" style="padding:0px; mn" v-if="element.mode==1">
          <div>
            <input v-model="element.addCardTitle" type="text" placeholder="Enter item title for list...">
          </div>
          <div>
            <button class="addBtn">Add Card</button>
            <span class="cancleBtn" @click="element.mode=0">✖</span>
          </div>
        </div>
      </div>
    </div>

    <div class="addBox" @click="addMode=1" v-if="addMode==0" >
      <div>+ Add another list</div>
    </div>

    <div class="regBox" v-if="addMode==1">
      <div>
        <input v-model="addTitle" type="text" placeholder="Enter list title...">
      </div>
      <div>
        <button class="addBtn" v-on:click="addData">Add List</button> 
        <span @click="addMode=0" class="cancleBtn">✖</span>
      </div>
    </div>
  </div>
</template>

<script>

import draggable from 'vuedraggable'
import * as todoApi from '@/api/todo'

export default {
  components: {
    draggable
  },
  data() {
    return {
      addTitle:'',
      addMode: 0,
      values : [{
        rows:[]
        }
      ],
      items: [
        {
          id:1,
          name:'Vue Begginer',
          rows:[
            {
              id:1,
              name:'대광'
            },
            {
              id:2,
              name:'예림'
            }
          ]
        },
        {
          id:2,
          name:'Node Begginer',
          rows:[
            {
              id:1,
              name:'대광'
            },
            {
              id:2,
              name:'예림'
            }
          ]
        }

      ]
    } 
  },
  methods: {
    getDataLoad(){
      console.log("start")
      this.values = []
      todoApi.getList().then(res =>{
        // console.log(res.data);
        res.data.forEach(element =>{

          console.log(element);
          this.values.push(element);
          }
        )
      });
    },
    addData : function(event) {
      // alert(this.addTitle)
      if(this.addTitle){
        this.insertData(this.addTitle)
      }
    },
    insertData(title){
      const data = {
        "TODO_TITLE" : title
      }
      todoApi.addList(data).then(res => {
        console.log(res);
      })

    }
  },
  created() {
    this.getDataLoad()
  }
}
</script>
