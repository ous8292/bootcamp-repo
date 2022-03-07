1. How do you start the mongo shell inside Robo3T?
        - right click db and openshell

2. How do you determine which database is currently being used?
        - left side it shows all the databases created

3. Use the current chort database

4. Insert the following documents into a collection called dc_firstName where firstName is your first name:

{alias: 'Superman', fname: 'Clark', lname: "Kent", nemesis: 'Lex Luthor', hero: true}

{alias: 'Batman', fname: 'Bruce', lname: "Wayne", nemesis: 'Joker', hero: true}

{alias: 'Joker', fname: 'Jack', lname: "Napier", nemesis: 'Batman', hero: false}

{alias: 'Catwoman', fname: 'Selena', lname: "Kyle", nemesis: 'Batman', hero: false}

db.char.insert()

5. Find all characters and sort by alias.
        db.char.find().sort({alias: 1})



6. Find all characters who have Batman as their nemesis.
        db.char.find({alias: "Batman"})

7. Find all characters who are heroes?
        db.char.find({hero: true})

8. Find all characters who are a hero, but show alias only.
        db.char.find({hero: true}, {alias: 1})

9. Find all characters who are a hero, but show everything BUT their alias.
        db.char.find({hero: true}, {alias: 0})

10. Catwoman started dating Batman, and now is considered a hero. Update her hero status? (HINT: make sure nothing else changes)

11. Catwoman broke up with Batman, she is a villain again. Update her hero status? (HINT: make sure nothing else changes)