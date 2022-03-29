const { response } = require("express");
const db = require("../lib/database")

exports.findAllList = async function(){
    try{
        let sql = `SELECT * FROM TODO_LIST WHERE TODO_DEL_YN = 'N'`;
        let result = [];
        let[List, fields] = await db.query(sql);
        for(let value of List){
            let Data = {
                seq : value.TODO_SEQ,
                title : value.TODO_TITLE,
                rows: []
            }
            result.push(Data);
        }
        return result;
    }catch(e){
        return e
    }
}


exports.findAll = async function(){
    try {
        let sql = `SELECT * FROM TODO_LIST WHERE TODO_DEL_YN = 'N'`;
        let result = [];
        let [todoList, fields] = await db.query(sql);
        for (let todo of todoList){
            // sql = `SELECT * FROM TBL_CARD_LIST WHERE CL_DEL_YN = 'N' AND CL_PARENT_SEQ = ${todo.TL_SEQ}` ;
            let listData = {
                id: todo.TODO_SEQ,
                mode: 0,            // 0: 기본 값, 1: 쓰기 모드
                addCardTitle: "",   // 입력된 데이터를 받을 변수 선언
                name: todo.TODO_TITLE,
                rows: []
            }
            
            let cardList = await this.getAllNode(todo.TODO_SEQ);
            // console.log(cardList);
            // let [cardList, cardFields] = await db.query(sql);
            for (let card of cardList){
                let cardData = {
                    id: card.CARD_SEQ,
                    mouseOver: 0,   // 마우스오버 이벤트 제어변수
                    name: card.CARD_CONTENT,
                }
                listData.rows.push(cardData);
            }   
            result.push(listData)        
        }

        return result;
    } catch(e) {
        return e
    }
}


// exports.findAll = async function(){
//     try {
//         let sql = `SELECT * FROM TODO_LIST WHERE TODO_DEL_YN = 'N'`;
//         let result = [];
//         let [todoList, fields] = await db.query(sql);
//         for (let todo of todoList){
//             // sql = `SELECT * FROM TBL_CARD_LIST WHERE CL_DEL_YN = 'N' AND CL_PARENT_SEQ = ${todo.TL_SEQ}` ;
//             let listData = {
//                 id: todo.TODO_SEQ,
//                 mode: 0,            // 0: 기본 값, 1: 쓰기 모드
//                 addCardTitle: "",   // 입력된 데이터를 받을 변수 선언
//                 name: todo.TODO_TITLE,
//                 rows: []
//             }
            
//             // let cardList = await this.getAllNode(todo.TODO_SEQ);
//             // console.log(cardList);
//             // let [cardList, cardFields] = await db.query(sql);
//             // for (let card of cardList){
//             //     let cardData = {
//             //         id: card.CARD_SEQ,
//             //         mouseOver: 0,   // 마우스오버 이벤트 제어변수
//             //         name: card.CARD_CONTENT,
//             //     }
//             //     // listData.rows.push(cardData);
//             // }   
//             result.push(listData)        
//         }

//         return result;
//     } catch(e) {
//         return e
//     }
// }

exports.getAllNode = async function(todoSeq){
    try {
        let sql, node, result=[], isNullTail=false;
        // Head Search
        sql = `SELECT * FROM TODO_CARD_LIST WHERE 
        CARD_DEL_YN = 'N' AND TODO_SEQ = ${todoSeq}`;
        let [head, field] = await db.query(sql);
        for(let data of head){
            result.push(data);
        }
        return result;
        // if(head[0]){
        //     node = head;
        //     result.push(node);
        //     // while(!isNullTail){
        //     //     // Tail Search # 다음 노드 값이 NULL이면 종료
        //     //     if(node[0].CL_NEXT == null){
        //     //         isNullTail = true;
        //     //     } else {
        //     //         sql = `SELECT * FROM TBL_CARD_LIST WHERE
        //     //         CL_DEL_YN = 'N' AND CL_PARENT_SEQ = ${todoSeq} AND CL_SEQ = ${node[0].CL_NEXT}`;
        //     //         [node, field] = await db.query(sql)
        //     //         result.push(node[0]);
        //     //     }
        //     // }
        //     return result
        // } else {
        //     return result;
        // }
    } catch(e) {
        return e
    }

}

exports.addList = async function(data){
    var sql ="INSERT INTO TODO_LIST (TODO_TITLE) values (?)";
    var PARAMS =[data.TODO_TITLE]
    db.query(sql,PARAMS, function(error, resultData){
        if(error){
            return error
        }else{
            response.json(resultData)
        }
    })
}
