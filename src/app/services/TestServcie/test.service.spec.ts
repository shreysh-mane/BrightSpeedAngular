import { testing } from "./test.service"



describe('TestServcie',()=>{

    it('it should add 2 numbers',()=>{

        let Testing= new testing();
        let result= Testing.add(2,2);

        expect(result).toBe(5);


    })
})