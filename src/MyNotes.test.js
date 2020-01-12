import React from 'react';
import { shallow } from 'enzyme';
import MyNotes from './MyNotes';


describe ('<MyNotes/>', () => {
    const MainWrapper = shallow (<MyNotes/>)

    it('checks if <MyNotes/> renders correctly', () => {
        expect(MainWrapper).toMatchSnapshot();
    });

    it('checks if the title renders and contains same value', () => {
        expect(MainWrapper.find('.title').text()).toEqual('My Notes App');
    })

    describe('when clicking the `addNotes` btn', () => {
        const id = 1;
        beforeEach (() => {
            MainWrapper.find('.add-btn').simulate('click');
        });

        afterEach (() => {
            MainWrapper.setState({notes:[]})
        });

        it ('adds a new note to the `state`', () => {
            expect(MainWrapper.state().notes).toEqual([{id}])
        });

        it ('adds a new note to the rendered ', () => {
            expect(MainWrapper.find('.notes-text-area').children().length).toEqual(1);
        });

        describe ('when the user wants to remove the added note', () => {
            beforeEach(()=>{
                MainWrapper.instance().removeNote({id})
            })
            it ('removes the note from `state`', () => {
                expect(MainWrapper.state().notes).toEqual([]);
            })
        })
    });


});