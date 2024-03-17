import { observable } from 'mobx';

const todoStore = observable({
    // state
    list: [],
    completedCnt: 0,
    noneCompletedCnt: 0,
    // action
    addTodo(todo) {
        this.list.push(todo);
        this.noneCompletedCnt = this.noneCompletedCnt + 1;
    },
    removeTodo(idx) {
        if (this.list[idx].completed) {
            this.completedCnt = this.completedCnt - 1;
        } else {
            this.noneCompletedCnt = this.noneCompletedCnt - 1;
        }
        this.list.splice(idx, 1);
    },
    completedTodo(idx) {
        const newArr = this.list.map((v, i) => {
            if (i === idx) {
                return { ...v, completed: !v.completed };
            } else {
                return v;
            }
        });
        let cnt = 0;
        let noneCnt = 0;
        newArr.forEach(v => {
            if (v.completed) {
                cnt++;
            } else {
                noneCnt++;
            }
        });
        this.completedCnt = cnt;
        this.noneCompletedCnt = noneCnt;
        this.list = newArr;
    },
});

export default todoStore;
