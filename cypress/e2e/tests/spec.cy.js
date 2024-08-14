/// <reference types="cypress" />
import CreateMonsterFormPage from '../../monsterPage/monsterPage';


describe ('MonsterPage Tests', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/');
    })

    it ('Create Monster button should be disabled and verify Alert', () => {
        CreateMonsterFormPage.clickCreateMonsterBtn();
        CreateMonsterFormPage.verifyAlertVisibility();  
        CreateMonsterFormPage.verifyCreateMonsterBtnDisabled();
    });

    it ('fill out the monster form and verify button state', () => {
        const monsterId = 'monster-1';
        CreateMonsterFormPage.getMonsterById(monsterId).click()
        CreateMonsterFormPage.enterName('Dragon');
        CreateMonsterFormPage.enterHp('50');
        CreateMonsterFormPage.enterAttack('60');
        CreateMonsterFormPage.enterDefense('23');
        CreateMonsterFormPage.enterSpeed('77');
        CreateMonsterFormPage.verifyCreateMonsterBtnEnabled();
        CreateMonsterFormPage.clickCreateMonsterBtn();
        
        
    });

    it ('Add and Remove the monster from Favourites', () => {
        const monsterId = 'monster-1';
        CreateMonsterFormPage.getMonsterById(monsterId).click()
        CreateMonsterFormPage.enterName('Dragon');
        CreateMonsterFormPage.enterHp('50');
        CreateMonsterFormPage.enterAttack('60');
        CreateMonsterFormPage.enterDefense('23');
        CreateMonsterFormPage.enterSpeed('77');
        CreateMonsterFormPage.verifyCreateMonsterBtnEnabled();
        CreateMonsterFormPage.clickCreateMonsterBtn();
        CreateMonsterFormPage.clickFavBtn();
        CreateMonsterFormPage.verifyCreateFavBtnColor('rgb(255, 0, 0)');
        CreateMonsterFormPage.clickFavBtn();
        CreateMonsterFormPage.verifyCreateFavBtnColor('rgba(0, 0, 0, 0.6)');

    });


    it ('Delete the Monster', () => {
        const monsterId = 'monster-1';
        CreateMonsterFormPage.getMonsterById(monsterId).click()
        CreateMonsterFormPage.enterName('Dragon');
        CreateMonsterFormPage.enterHp('50');
        CreateMonsterFormPage.enterAttack('60');
        CreateMonsterFormPage.enterDefense('23');
        CreateMonsterFormPage.enterSpeed('77');
        CreateMonsterFormPage.verifyCreateMonsterBtnEnabled();
        CreateMonsterFormPage.clickCreateMonsterBtn();
        CreateMonsterFormPage.clickFavBtn();
        CreateMonsterFormPage.verifyCreateFavBtnColor('rgb(255, 0, 0)');
        CreateMonsterFormPage.clickFavBtn();
        CreateMonsterFormPage.verifyCreateFavBtnColor('rgba(0, 0, 0, 0.6)');
        CreateMonsterFormPage.clickDeleteBtn();
        CreateMonsterFormPage.veridyDeleteMessage();
    });



});