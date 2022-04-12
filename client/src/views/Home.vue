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
        <draggable :list="element.rows" draggable=".item" group="values" @change="onChange($event, element.id)">
          <div class="item" v-for="(item) in element.rows" :key="item.id">
            <div>{{item.name}}</div>
            <div class="edit" @click="editCard">
              <div><font-awesome-icon icon="fa-regular fa-edit"/></div>
            </div>
          </div>
          </draggable>
        </div>
      </div>
      <div class="itemFooter">
        <div class="btnBox" v-if="element.mode==0" @click="element.mode=1, test=element.id">
          <div class="btn">
          + Add another card
          </div>
          <div class="btn-img">
            <font-awesome-icon icon="fa-regular fa-note-sticky" />
          </div>
        </div>
        <div class="regBox" style="padding:0px; mn" v-if="element.mode==1">
          <div>
            <input v-model="addCardTitle" type="text" placeholder="Enter item title for list...">
          </div>
          <div>
            <button class="addBtn" @click="addCard">Add Card</button>
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
      addCardTitle:'',
      test:0,
      addMode: 0,
      values : [{
        rows:[]
        }
      ],
    } 
  },
  methods: {
    getDataLoad(){
      // console.log("start")
      this.values = []
      todoApi.getList().then(res =>{
        // console.log(res.data);
        res.data.forEach(element =>{

          // console.log(element);
          this.values.push(element);
          }
        )
        console.log(this.values);
      });
    },
    addData : function(event) { //데이터 추가
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
        this.getDataLoad()
        this.addTitle = ''
      })

    },
    addCard:function(event){
      // console.log(this.test)
      // alert(this.addCardTitle)
      if(this.addCardTitle){
        this.insertCard(this.addCardTitle, this.test)

      }
    },
    insertCard(card, seq){
      const data = {
        "CARD_CONTENT" : card,
        "TODO_SEQ" : seq,
      }
      todoApi.addCard(data).then(res => {
        console.log(res)
        this.getDataLoad()
        this.addCardTitle = ''
      })
    },

    onChange(event, group) { //card 드래그시 TODO_SEQ 변경
      if(event.added){ //다른 list로 card 추가시
        const value = event.added.element;
        this.updateTodoSeq(value.id, group);
      }
    },
    updateTodoSeq(cardseq, todoseq){
        // console.log(cardseq)//seq
        // console.log(todoseq) //바뀌는 todo_seq
        const data = {
          "CARD_SEQ" : cardseq,
          "TODO_SEQ" : todoseq,
        }
        todoApi.updateTodoSeq(data).then(res => {
          console.log(res)
          this.getDataLoad()
        })
    },

    editCard(e){
      console.log(e);
    }
  },
  created() {
    this.getDataLoad()
  }
}
</script>
