import React from 'react';
import './App.css';

function App() {
  return (
    <>
      <h1 className="title">Піца баварська</h1>
      <img src="/img/dish.jpg" alt="" />
      <h3>Інгредієнти</h3>
      <ul>
        <li>Тісто для піци - 400 г</li>
        <li>Сир "Гауда" - 130 г</li>
        <li>Мисливські ковбаски - 90 г</li>
        <li>Печериці свіжі - 100 г</li>
        <li>Балик свинний - 70 г</li>
        <li>Помідори свіжі - 65 г</li>
        <li>Петрушка - 7 г</li>
        <li>Соняшникова олія (щоб змазати форму для піци) - 2 г</li>
        <li>Томатний соус - 130 г</li>
      </ul>
      <h3>Інгредієнти для соуса</h3>
      <ul>
        <li>Консервовані томати - 4 шт</li>
        <li>Часник - 1-2 зубчики</li>
        <li>Приправа для піци, сіль - за смаком</li>
      </ul>
      <h3>Спосіб приготуваня</h3>
      <div>
        <p>Спочатку приготуємо соус. Беремо консервовані томати (без шкірки), приправу для піци, сіль та часник і кладемо в блендер.</p>
        <p>Змішуємо все до однорідної маси.</p>
        <p>Тепер можна розпочинати приготування піци. Спочатку розкладаємо тісто на форму для піци, попередньо змазану олією.</p>
        <p>Розмазуємо томатний соус по тісту.</p>
        <p>Розкладаємо на тісто сир, ковбаски, печериці, балик та помідори.</p>
        <p>Відправляємо піцу в духовку з температурою 330-360&deg;C на 5-8 хвилин. До золотистої шкірки.</p>
        <p>Після запікання посипаємо піцу покришеною петрушкою.</p>
        <p>Смачного!</p>
      </div>
    </>
  );
}

export default App;
