import {BinaryTree} from "../binary-tree/BinaryTree";
import {expect} from "chai";

describe("BinaryTree test", () => {
    it('shoud successfully get correct level', () => {

        //given
        const array = [8, 3, 1, 10, 6, 7, 4, 13, 14];
        const binaryTree = new BinaryTree(array);

        //when
        const level = binaryTree.getLevel(13);

        //then
        const expectedLevel = 3;
        expect(level).to.eql(expectedLevel);

    });
});