import Mock from 'mockjs';
import item from './item.json'

Mock.mock("/mock/item",{code:200,data:item})//模拟商品数据