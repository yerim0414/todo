const db = require("../lib/database")

exports.findAll = async function(){
    try {
        let sql = `SELECT * FROM TBL_TODO_LIST WHERE TL_DEL_YN = 'N'`;
        let result = [];
        let [todoList, fields] = await db.query(sql);
        for (let todo of todoList){
            // sql = `SELECT * FROM TBL_CARD_LIST WHERE CL_DEL_YN = 'N' AND CL_PARENT_SEQ = ${todo.TL_SEQ}` ;
            let listData = {
                id: todo.TL_SEQ,
                mode: 0,            // 0: 기본 값, 1: 쓰기 모드
                addCardTitle: "",   // 입력된 데이터를 받을 변수 선언
                name: todo.TL_TITLE,
                rows: []
            }
            
            let cardList = await this.getAllNode(todo.TL_SEQ);
            // console.log(cardList);
            // let [cardList, cardFields] = await db.query(sql);
            for (let card of cardList){
                let cardData = {
                    id: card.CL_SEQ,
                    mouseOver: 0,   // 마우스오버 이벤트 제어변수
                    name: card.CL_TITLE,
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

exports.getAllNode = async function(todoSeq){
    try {
        let sql, node, result=[], isNullTail=false;
        // Head Search
        sql = `SELECT * FROM TBL_CARD_LIST WHERE 
        CL_DEL_YN = 'N' AND CL_PARENT_SEQ = ${todoSeq} AND CL_PREV IS NULL`;
        let [head, field] = await db.query(sql);
        if(head[0]){
            node = head;
            result.push(node[0]);
            while(!isNullTail){
                // Tail Search # 다음 노드 값이 NULL이면 종료
                if(node[0].CL_NEXT == null){
                    isNullTail = true;
                } else {
                    sql = `SELECT * FROM TBL_CARD_LIST WHERE
                    CL_DEL_YN = 'N' AND CL_PARENT_SEQ = ${todoSeq} AND CL_SEQ = ${node[0].CL_NEXT}`;
                    [node, field] = await db.query(sql)
                    result.push(node[0]);
                }
            }
            return result
        } else {
            return result;
        }
    } catch(e) {
        return e
    }

}
