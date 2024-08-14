import {CreatedMonsterFormTestIds,MonstersListTestIds,CreateMonstersTestIds,MonsterCardTestIds} from '../../src/constants/data-testids';


class CreateMonsterFormPage {

//getters for the Elements

get createMonsterBtn(){
    return cy.get(`[data-testid=${CreatedMonsterFormTestIds.createMonsterBtn}]`);
}

get alert(){
    return cy.get(`[data-testid=${CreatedMonsterFormTestIds.alert}]`);
}

getMonsterById(MonsterId){
    return cy.get(`[data-testid=${MonstersListTestIds.section}] [data-testid=${MonsterId}]`);

}

get createFavBtn(){
    return cy.get(`[data-testid=${MonsterCardTestIds.favBtn }]`);
}

get createDelBtn(){
    return cy.get(`[data-testid=${MonsterCardTestIds.deleteBtn }]`)
}

get createDeletMessage(){
    return cy.get(`[data-testid=${CreateMonstersTestIds.monstersTitle }]`);

}

get nameInput() {
    return cy.get(`[data-testid=${CreatedMonsterFormTestIds.name}]`);
}

get hpInput(){
    return cy.get(`[data-testid=${CreatedMonsterFormTestIds.hp}]`);

}
get attackInput(){

    return cy.get(`[data-testid=${CreatedMonsterFormTestIds.attack}]`);

}


get defenseInput(){

    return cy.get(`[data-testid=${CreatedMonsterFormTestIds.defense}]`);

}

get speedInput(){
    return cy.get(`[data-testid=${CreatedMonsterFormTestIds.speed}]`);
}
//Actions on the Elements fethced by getters

clickCreateMonsterBtn(){
    this.createMonsterBtn.click();
}

verifyAlertVisibility(){
    this.alert.should('be.visible');
}

verifyCreateMonsterBtnDisabled(){
    this.createMonsterBtn.should('be.disabled');
}

enterName(name){
    this.nameInput.type(name);
}

enterHp(hp){
    this.hpInput.type(hp);
}

enterAttack(attack){
    this.attackInput.type(attack);
}

enterDefense(defense){
    this.defenseInput.type(defense);
}

enterSpeed(speed){
    this.speedInput.type(speed);
}

verifyCreateMonsterBtnEnabled(){
    this.createMonsterBtn.should('be.enabled');
}

clickFavBtn(){
    this.createFavBtn.click();
}

verifyCreateFavBtnColor(color){
    this.createFavBtn.should('have.css', 'fill', color);
}

clickDeleteBtn (){
    this.createDelBtn.click();
}

veridyDeleteMessage(){
    this.createDeletMessage.should('have.text', 'There are no monsters');
}

}

export default new CreateMonsterFormPage ;