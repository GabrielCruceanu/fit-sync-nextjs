import ProgramsModel from '#/model/programs/programs.model';

export const Programs: ProgramsModel[] = [
  {
    id: '123',
    trainerUsername: 'Cristofer Arcand',
    name: 'Full Body Goal Crusher',
    type: 'PRO',
    category: 'Masă mulsculară',
    price: 432,
    experience: 'Incepator',
    workout: {
      id: '12345',
      photo:
        'https://images.unsplash.com/photo-1599058917212-d750089bc07e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80',
      name: 'Antrenament Full Body Goal Crusher',
      type: 'PRO',
      category: 'Masă mulsculară',
      description:
        'Planul alimentar este diferit pentru zilele de antrenament și zilele fără antrenament. În zilele de antrenament vei avea o masă pre-antrenament și o masă de după antrenament totalizând 6 mese în respectivă zi, pe când zilele fără antrenamente vor avea numai 5 mese pe zi.',
      daysToDo: {
        dayOne: {
          name: 'Luni',
          exercises: [
            {
              id: '123456',
              photo:
                'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
              video: 'https://www.youtube.com/watch?v=XoTXuZQ4SaU',
              name: 'Impins din orizontal cu bara',
              category: 'Masă mulsculară',
              effortZone: 'Antrenament piept + spate + abdomen',
              reps: '6',
              series: '3',
              modeOfExecution: [
                'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
              ],
            },
            {
              id: '123456',
              photo:
                'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
              video: 'https://www.youtube.com/watch?v=XoTXuZQ4SaU',
              name: 'Impins din orizontal cu bara',
              category: 'Masă mulsculară',
              effortZone: 'Antrenament piept + spate + abdomen',
              reps: '6',
              series: '3',
              modeOfExecution: [
                'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
              ],
            },
            {
              id: '123456',
              photo:
                'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
              video: 'https://www.youtube.com/watch?v=XoTXuZQ4SaU',
              name: 'Impins din orizontal cu bara',
              category: 'Masă mulsculară',
              effortZone: 'Antrenament piept + spate + abdomen',
              reps: '6',
              series: '3',
              modeOfExecution: [
                'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
              ],
            },
          ],
        },
        dayTwo: {
          name: 'Marti',
          exercises: [
            {
              id: '123456',
              photo:
                'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
              video: 'https://www.youtube.com/watch?v=XoTXuZQ4SaU',
              name: 'Impins din orizontal cu bara',
              category: 'Masă mulsculară',
              effortZone: 'Antrenament piept + spate + abdomen',
              reps: '6',
              series: '3',
              modeOfExecution: [
                'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
              ],
            },
            {
              id: '123456',
              photo:
                'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
              video: 'https://www.youtube.com/watch?v=XoTXuZQ4SaU',
              name: 'Impins din orizontal cu bara',
              category: 'Masă mulsculară',
              effortZone: 'Antrenament piept + spate + abdomen',
              reps: '6',
              series: '3',
              modeOfExecution: [
                'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
              ],
            },
            {
              id: '123456',
              photo:
                'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
              video: 'https://www.youtube.com/watch?v=XoTXuZQ4SaU',
              name: 'Impins din orizontal cu bara',
              category: 'Masă mulsculară',
              effortZone: 'Antrenament piept + spate + abdomen',
              reps: '6',
              series: '3',
              modeOfExecution: [
                'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
              ],
            },
          ],
        },
        dayThree: {
          name: 'Miercuri',
          exercises: [
            {
              id: '123456',
              photo:
                'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
              video: 'https://www.youtube.com/watch?v=XoTXuZQ4SaU',
              name: 'Impins din orizontal cu bara',
              category: 'Masă mulsculară',
              effortZone: 'Antrenament piept + spate + abdomen',
              reps: '6',
              series: '3',
              modeOfExecution: [
                'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
              ],
            },
            {
              id: '123456',
              photo:
                'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
              video: 'https://www.youtube.com/watch?v=XoTXuZQ4SaU',
              name: 'Impins din orizontal cu bara',
              category: 'Masă mulsculară',
              effortZone: 'Antrenament piept + spate + abdomen',
              reps: '6',
              series: '3',
              modeOfExecution: [
                'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
              ],
            },
            {
              id: '123456',
              photo:
                'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
              video: 'https://www.youtube.com/watch?v=XoTXuZQ4SaU',
              name: 'Impins din orizontal cu bara',
              category: 'Masă mulsculară',
              effortZone: 'Antrenament piept + spate + abdomen',
              reps: '6',
              series: '3',
              modeOfExecution: [
                'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
              ],
            },
          ],
        },
        dayFour: {
          name: 'Joi',
          exercises: [
            {
              id: '123456',
              photo:
                'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
              video: 'https://www.youtube.com/watch?v=XoTXuZQ4SaU',
              name: 'Impins din orizontal cu bara',
              category: 'Masă mulsculară',
              effortZone: 'Antrenament piept + spate + abdomen',
              reps: '6',
              series: '3',
              modeOfExecution: [
                'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
              ],
            },
            {
              id: '123456',
              photo:
                'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
              video: 'https://www.youtube.com/watch?v=XoTXuZQ4SaU',
              name: 'Impins din orizontal cu bara',
              category: 'Masă mulsculară',
              effortZone: 'Antrenament piept + spate + abdomen',
              reps: '6',
              series: '3',
              modeOfExecution: [
                'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
              ],
            },
            {
              id: '123456',
              photo:
                'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
              video: 'https://www.youtube.com/watch?v=XoTXuZQ4SaU',
              name: 'Impins din orizontal cu bara',
              category: 'Masă mulsculară',
              effortZone: 'Antrenament piept + spate + abdomen',
              reps: '6',
              series: '3',
              modeOfExecution: [
                'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
              ],
            },
          ],
        },
        dayFive: {
          name: 'Vineri',
          exercises: [
            {
              id: '123456',
              photo:
                'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
              video: 'https://www.youtube.com/watch?v=XoTXuZQ4SaU',
              name: 'Impins din orizontal cu bara',
              category: 'Masă mulsculară',
              effortZone: 'Antrenament piept + spate + abdomen',
              reps: '6',
              series: '3',
              modeOfExecution: [
                'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
              ],
            },
            {
              id: '123456',
              photo:
                'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
              video: 'https://www.youtube.com/watch?v=XoTXuZQ4SaU',
              name: 'Impins din orizontal cu bara',
              category: 'Masă mulsculară',
              effortZone: 'Antrenament piept + spate + abdomen',
              reps: '6',
              series: '3',
              modeOfExecution: [
                'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
              ],
            },
            {
              id: '123456',
              photo:
                'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
              video: 'https://www.youtube.com/watch?v=XoTXuZQ4SaU',
              name: 'Impins din orizontal cu bara',
              category: 'Masă mulsculară',
              effortZone: 'Antrenament piept + spate + abdomen',
              reps: '6',
              series: '3',
              modeOfExecution: [
                'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
              ],
            },
          ],
        },
        daySix: {
          name: 'Sambata',
          exercises: [
            {
              id: '123456',
              photo:
                'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
              video: 'https://www.youtube.com/watch?v=XoTXuZQ4SaU',
              name: 'Impins din orizontal cu bara',
              category: 'Masă mulsculară',
              effortZone: 'Antrenament piept + spate + abdomen',
              reps: '6',
              series: '3',
              modeOfExecution: [
                'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
              ],
            },
            {
              id: '123456',
              photo:
                'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
              video: 'https://www.youtube.com/watch?v=XoTXuZQ4SaU',
              name: 'Impins din orizontal cu bara',
              category: 'Masă mulsculară',
              effortZone: 'Antrenament piept + spate + abdomen',
              reps: '6',
              series: '3',
              modeOfExecution: [
                'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
              ],
            },
            {
              id: '123456',
              photo:
                'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
              video: 'https://www.youtube.com/watch?v=XoTXuZQ4SaU',
              name: 'Impins din orizontal cu bara',
              category: 'Masă mulsculară',
              effortZone: 'Antrenament piept + spate + abdomen',
              reps: '6',
              series: '3',
              modeOfExecution: [
                'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
              ],
            },
          ],
        },
        daySeven: {
          name: 'Duminica',
          exercises: [
            {
              id: '123456',
              photo:
                'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
              video: 'https://www.youtube.com/watch?v=XoTXuZQ4SaU',
              name: 'Impins din orizontal cu bara',
              category: 'Masă mulsculară',
              effortZone: 'Antrenament piept + spate + abdomen',
              reps: '6',
              series: '3',
              modeOfExecution: [
                'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
              ],
            },
            {
              id: '123456',
              photo:
                'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
              video: 'https://www.youtube.com/watch?v=XoTXuZQ4SaU',
              name: 'Impins din orizontal cu bara',
              category: 'Masă mulsculară',
              effortZone: 'Antrenament piept + spate + abdomen',
              reps: '6',
              series: '3',
              modeOfExecution: [
                'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
              ],
            },
            {
              id: '123456',
              photo:
                'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
              video: 'https://www.youtube.com/watch?v=XoTXuZQ4SaU',
              name: 'Impins din orizontal cu bara',
              category: 'Masă mulsculară',
              effortZone: 'Antrenament piept + spate + abdomen',
              reps: '6',
              series: '3',
              modeOfExecution: [
                'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
              ],
            },
          ],
        },
      },
    },
    nutrition: {
      id: '1234567',
      photo:
        'https://images.unsplash.com/photo-1600289031464-74d374b64991?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fG1lYWx8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
      name: 'Nutritie Full Body Goal Crusher',
      type: 'PRO',
      category: 'Masă mulsculară',
      description:
        'Planul alimentar este diferit pentru zilele de antrenament și zilele fără antrenament. În zilele de antrenament vei avea o masă pre-antrenament și o masă de după antrenament totalizând 6 mese în respectivă zi, pe când zilele fără antrenamente vor avea numai 5 mese pe zi.',
      kCal: '2500 - 3000',
      daysToDo: {
        dayOne: {
          name: 'Luni',
          recipes: [
            {
              id: '12345678',
              photo:
                'https://images.unsplash.com/photo-1608835291093-394b0c943a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
              video: 'https://www.youtube.com/watch?v=g7_HKWvhj5I',
              name: 'Somon cu salata de brocoli si omleta cu cascaval',
              category: 'Masă mulsculară',
              kCal: '500 - 600',
              proteins: '35',
              carbohydrate: '50',
              fats: '24',
              ingredients: [
                '350g albus ou OptiSana (Lidl)',
                '3 felii paine integral Vel Pitar (Paco) / Tastino (Lidl) (important e sa fie 90-100g maxim cantitatea pentru ca fiecare marca are greutatea diferita la felii)',
                'Un avocado mediu (sa fie maro – asa stii ca e copt cum trebuie)',
              ],
              modeOfExecution: [
                'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                'Pofta buna!',
              ],
            },
            {
              id: '12345678',
              photo:
                'https://images.unsplash.com/photo-1608835291093-394b0c943a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
              video: 'https://www.youtube.com/watch?v=g7_HKWvhj5I',
              name: 'Somon cu salata de brocoli si omleta cu cascaval',
              category: 'Masă mulsculară',
              kCal: '500 - 600',
              proteins: '35',
              carbohydrate: '50',
              fats: '24',
              ingredients: [
                '350g albus ou OptiSana (Lidl)',
                '3 felii paine integral Vel Pitar (Paco) / Tastino (Lidl) (important e sa fie 90-100g maxim cantitatea pentru ca fiecare marca are greutatea diferita la felii)',
                'Un avocado mediu (sa fie maro – asa stii ca e copt cum trebuie)',
              ],
              modeOfExecution: [
                'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                'Pofta buna!',
              ],
            },
            {
              id: '12345678',
              photo:
                'https://images.unsplash.com/photo-1608835291093-394b0c943a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
              video: 'https://www.youtube.com/watch?v=g7_HKWvhj5I',
              name: 'Somon cu salata de brocoli si omleta cu cascaval',
              category: 'Masă mulsculară',
              kCal: '500 - 600',
              proteins: '35',
              carbohydrate: '50',
              fats: '24',
              ingredients: [
                '350g albus ou OptiSana (Lidl)',
                '3 felii paine integral Vel Pitar (Paco) / Tastino (Lidl) (important e sa fie 90-100g maxim cantitatea pentru ca fiecare marca are greutatea diferita la felii)',
                'Un avocado mediu (sa fie maro – asa stii ca e copt cum trebuie)',
              ],
              modeOfExecution: [
                'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                'Pofta buna!',
              ],
            },
            {
              id: '12345678',
              photo:
                'https://images.unsplash.com/photo-1608835291093-394b0c943a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
              video: 'https://www.youtube.com/watch?v=g7_HKWvhj5I',
              name: 'Somon cu salata de brocoli si omleta cu cascaval',
              category: 'Masă mulsculară',
              kCal: '500 - 600',
              proteins: '35',
              carbohydrate: '50',
              fats: '24',
              ingredients: [
                '350g albus ou OptiSana (Lidl)',
                '3 felii paine integral Vel Pitar (Paco) / Tastino (Lidl) (important e sa fie 90-100g maxim cantitatea pentru ca fiecare marca are greutatea diferita la felii)',
                'Un avocado mediu (sa fie maro – asa stii ca e copt cum trebuie)',
              ],
              modeOfExecution: [
                'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                'Pofta buna!',
              ],
            },
          ],
        },
        dayTwo: {
          name: 'Marti',
          recipes: [
            {
              id: '12345678',
              photo:
                'https://images.unsplash.com/photo-1608835291093-394b0c943a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
              video: 'https://www.youtube.com/watch?v=g7_HKWvhj5I',
              name: 'Somon cu salata de brocoli si omleta cu cascaval',
              category: 'Masă mulsculară',
              kCal: '500 - 600',
              proteins: '35',
              carbohydrate: '50',
              fats: '24',
              ingredients: [
                '350g albus ou OptiSana (Lidl)',
                '3 felii paine integral Vel Pitar (Paco) / Tastino (Lidl) (important e sa fie 90-100g maxim cantitatea pentru ca fiecare marca are greutatea diferita la felii)',
                'Un avocado mediu (sa fie maro – asa stii ca e copt cum trebuie)',
              ],
              modeOfExecution: [
                'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                'Pofta buna!',
              ],
            },
            {
              id: '12345678',
              photo:
                'https://images.unsplash.com/photo-1608835291093-394b0c943a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
              video: 'https://www.youtube.com/watch?v=g7_HKWvhj5I',
              name: 'Somon cu salata de brocoli si omleta cu cascaval',
              category: 'Masă mulsculară',
              kCal: '500 - 600',
              proteins: '35',
              carbohydrate: '50',
              fats: '24',
              ingredients: [
                '350g albus ou OptiSana (Lidl)',
                '3 felii paine integral Vel Pitar (Paco) / Tastino (Lidl) (important e sa fie 90-100g maxim cantitatea pentru ca fiecare marca are greutatea diferita la felii)',
                'Un avocado mediu (sa fie maro – asa stii ca e copt cum trebuie)',
              ],
              modeOfExecution: [
                'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                'Pofta buna!',
              ],
            },
            {
              id: '12345678',
              photo:
                'https://images.unsplash.com/photo-1608835291093-394b0c943a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
              video: 'https://www.youtube.com/watch?v=g7_HKWvhj5I',
              name: 'Somon cu salata de brocoli si omleta cu cascaval',
              category: 'Masă mulsculară',
              kCal: '500 - 600',
              proteins: '35',
              carbohydrate: '50',
              fats: '24',
              ingredients: [
                '350g albus ou OptiSana (Lidl)',
                '3 felii paine integral Vel Pitar (Paco) / Tastino (Lidl) (important e sa fie 90-100g maxim cantitatea pentru ca fiecare marca are greutatea diferita la felii)',
                'Un avocado mediu (sa fie maro – asa stii ca e copt cum trebuie)',
              ],
              modeOfExecution: [
                'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                'Pofta buna!',
              ],
            },
            {
              id: '12345678',
              photo:
                'https://images.unsplash.com/photo-1608835291093-394b0c943a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
              video: 'https://www.youtube.com/watch?v=g7_HKWvhj5I',
              name: 'Somon cu salata de brocoli si omleta cu cascaval',
              category: 'Masă mulsculară',
              kCal: '500 - 600',
              proteins: '35',
              carbohydrate: '50',
              fats: '24',
              ingredients: [
                '350g albus ou OptiSana (Lidl)',
                '3 felii paine integral Vel Pitar (Paco) / Tastino (Lidl) (important e sa fie 90-100g maxim cantitatea pentru ca fiecare marca are greutatea diferita la felii)',
                'Un avocado mediu (sa fie maro – asa stii ca e copt cum trebuie)',
              ],
              modeOfExecution: [
                'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                'Pofta buna!',
              ],
            },
          ],
        },
        dayThree: {
          name: 'Miercuri',
          recipes: [
            {
              id: '12345678',
              photo:
                'https://images.unsplash.com/photo-1608835291093-394b0c943a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
              video: 'https://www.youtube.com/watch?v=g7_HKWvhj5I',
              name: 'Somon cu salata de brocoli si omleta cu cascaval',
              category: 'Masă mulsculară',
              kCal: '500 - 600',
              proteins: '35',
              carbohydrate: '50',
              fats: '24',
              ingredients: [
                '350g albus ou OptiSana (Lidl)',
                '3 felii paine integral Vel Pitar (Paco) / Tastino (Lidl) (important e sa fie 90-100g maxim cantitatea pentru ca fiecare marca are greutatea diferita la felii)',
                'Un avocado mediu (sa fie maro – asa stii ca e copt cum trebuie)',
              ],
              modeOfExecution: [
                'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                'Pofta buna!',
              ],
            },
            {
              id: '12345678',
              photo:
                'https://images.unsplash.com/photo-1608835291093-394b0c943a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
              video: 'https://www.youtube.com/watch?v=g7_HKWvhj5I',
              name: 'Somon cu salata de brocoli si omleta cu cascaval',
              category: 'Masă mulsculară',
              kCal: '500 - 600',
              proteins: '35',
              carbohydrate: '50',
              fats: '24',
              ingredients: [
                '350g albus ou OptiSana (Lidl)',
                '3 felii paine integral Vel Pitar (Paco) / Tastino (Lidl) (important e sa fie 90-100g maxim cantitatea pentru ca fiecare marca are greutatea diferita la felii)',
                'Un avocado mediu (sa fie maro – asa stii ca e copt cum trebuie)',
              ],
              modeOfExecution: [
                'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                'Pofta buna!',
              ],
            },
            {
              id: '12345678',
              photo:
                'https://images.unsplash.com/photo-1608835291093-394b0c943a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
              video: 'https://www.youtube.com/watch?v=g7_HKWvhj5I',
              name: 'Somon cu salata de brocoli si omleta cu cascaval',
              category: 'Masă mulsculară',
              kCal: '500 - 600',
              proteins: '35',
              carbohydrate: '50',
              fats: '24',
              ingredients: [
                '350g albus ou OptiSana (Lidl)',
                '3 felii paine integral Vel Pitar (Paco) / Tastino (Lidl) (important e sa fie 90-100g maxim cantitatea pentru ca fiecare marca are greutatea diferita la felii)',
                'Un avocado mediu (sa fie maro – asa stii ca e copt cum trebuie)',
              ],
              modeOfExecution: [
                'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                'Pofta buna!',
              ],
            },
            {
              id: '12345678',
              photo:
                'https://images.unsplash.com/photo-1608835291093-394b0c943a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
              video: 'https://www.youtube.com/watch?v=g7_HKWvhj5I',
              name: 'Somon cu salata de brocoli si omleta cu cascaval',
              category: 'Masă mulsculară',
              kCal: '500 - 600',
              proteins: '35',
              carbohydrate: '50',
              fats: '24',
              ingredients: [
                '350g albus ou OptiSana (Lidl)',
                '3 felii paine integral Vel Pitar (Paco) / Tastino (Lidl) (important e sa fie 90-100g maxim cantitatea pentru ca fiecare marca are greutatea diferita la felii)',
                'Un avocado mediu (sa fie maro – asa stii ca e copt cum trebuie)',
              ],
              modeOfExecution: [
                'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                'Pofta buna!',
              ],
            },
          ],
        },
        dayFour: {
          name: 'Joi',
          recipes: [
            {
              id: '12345678',
              photo:
                'https://images.unsplash.com/photo-1608835291093-394b0c943a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
              video: 'https://www.youtube.com/watch?v=g7_HKWvhj5I',
              name: 'Somon cu salata de brocoli si omleta cu cascaval',
              category: 'Masă mulsculară',
              kCal: '500 - 600',
              proteins: '35',
              carbohydrate: '50',
              fats: '24',
              ingredients: [
                '350g albus ou OptiSana (Lidl)',
                '3 felii paine integral Vel Pitar (Paco) / Tastino (Lidl) (important e sa fie 90-100g maxim cantitatea pentru ca fiecare marca are greutatea diferita la felii)',
                'Un avocado mediu (sa fie maro – asa stii ca e copt cum trebuie)',
              ],
              modeOfExecution: [
                'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                'Pofta buna!',
              ],
            },
            {
              id: '12345678',
              photo:
                'https://images.unsplash.com/photo-1608835291093-394b0c943a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
              video: 'https://www.youtube.com/watch?v=g7_HKWvhj5I',
              name: 'Somon cu salata de brocoli si omleta cu cascaval',
              category: 'Masă mulsculară',
              kCal: '500 - 600',
              proteins: '35',
              carbohydrate: '50',
              fats: '24',
              ingredients: [
                '350g albus ou OptiSana (Lidl)',
                '3 felii paine integral Vel Pitar (Paco) / Tastino (Lidl) (important e sa fie 90-100g maxim cantitatea pentru ca fiecare marca are greutatea diferita la felii)',
                'Un avocado mediu (sa fie maro – asa stii ca e copt cum trebuie)',
              ],
              modeOfExecution: [
                'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                'Pofta buna!',
              ],
            },
            {
              id: '12345678',
              photo:
                'https://images.unsplash.com/photo-1608835291093-394b0c943a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
              video: 'https://www.youtube.com/watch?v=g7_HKWvhj5I',
              name: 'Somon cu salata de brocoli si omleta cu cascaval',
              category: 'Masă mulsculară',
              kCal: '500 - 600',
              proteins: '35',
              carbohydrate: '50',
              fats: '24',
              ingredients: [
                '350g albus ou OptiSana (Lidl)',
                '3 felii paine integral Vel Pitar (Paco) / Tastino (Lidl) (important e sa fie 90-100g maxim cantitatea pentru ca fiecare marca are greutatea diferita la felii)',
                'Un avocado mediu (sa fie maro – asa stii ca e copt cum trebuie)',
              ],
              modeOfExecution: [
                'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                'Pofta buna!',
              ],
            },
            {
              id: '12345678',
              photo:
                'https://images.unsplash.com/photo-1608835291093-394b0c943a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
              video: 'https://www.youtube.com/watch?v=g7_HKWvhj5I',
              name: 'Somon cu salata de brocoli si omleta cu cascaval',
              category: 'Masă mulsculară',
              kCal: '500 - 600',
              proteins: '35',
              carbohydrate: '50',
              fats: '24',
              ingredients: [
                '350g albus ou OptiSana (Lidl)',
                '3 felii paine integral Vel Pitar (Paco) / Tastino (Lidl) (important e sa fie 90-100g maxim cantitatea pentru ca fiecare marca are greutatea diferita la felii)',
                'Un avocado mediu (sa fie maro – asa stii ca e copt cum trebuie)',
              ],
              modeOfExecution: [
                'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                'Pofta buna!',
              ],
            },
          ],
        },
        dayFive: {
          name: 'Vineri',
          recipes: [
            {
              id: '12345678',
              photo:
                'https://images.unsplash.com/photo-1608835291093-394b0c943a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
              video: 'https://www.youtube.com/watch?v=g7_HKWvhj5I',
              name: 'Somon cu salata de brocoli si omleta cu cascaval',
              category: 'Masă mulsculară',
              kCal: '500 - 600',
              proteins: '35',
              carbohydrate: '50',
              fats: '24',
              ingredients: [
                '350g albus ou OptiSana (Lidl)',
                '3 felii paine integral Vel Pitar (Paco) / Tastino (Lidl) (important e sa fie 90-100g maxim cantitatea pentru ca fiecare marca are greutatea diferita la felii)',
                'Un avocado mediu (sa fie maro – asa stii ca e copt cum trebuie)',
              ],
              modeOfExecution: [
                'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                'Pofta buna!',
              ],
            },
            {
              id: '12345678',
              photo:
                'https://images.unsplash.com/photo-1608835291093-394b0c943a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
              video: 'https://www.youtube.com/watch?v=g7_HKWvhj5I',
              name: 'Somon cu salata de brocoli si omleta cu cascaval',
              category: 'Masă mulsculară',
              kCal: '500 - 600',
              proteins: '35',
              carbohydrate: '50',
              fats: '24',
              ingredients: [
                '350g albus ou OptiSana (Lidl)',
                '3 felii paine integral Vel Pitar (Paco) / Tastino (Lidl) (important e sa fie 90-100g maxim cantitatea pentru ca fiecare marca are greutatea diferita la felii)',
                'Un avocado mediu (sa fie maro – asa stii ca e copt cum trebuie)',
              ],
              modeOfExecution: [
                'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                'Pofta buna!',
              ],
            },
            {
              id: '12345678',
              photo:
                'https://images.unsplash.com/photo-1608835291093-394b0c943a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
              video: 'https://www.youtube.com/watch?v=g7_HKWvhj5I',
              name: 'Somon cu salata de brocoli si omleta cu cascaval',
              category: 'Masă mulsculară',
              kCal: '500 - 600',
              proteins: '35',
              carbohydrate: '50',
              fats: '24',
              ingredients: [
                '350g albus ou OptiSana (Lidl)',
                '3 felii paine integral Vel Pitar (Paco) / Tastino (Lidl) (important e sa fie 90-100g maxim cantitatea pentru ca fiecare marca are greutatea diferita la felii)',
                'Un avocado mediu (sa fie maro – asa stii ca e copt cum trebuie)',
              ],
              modeOfExecution: [
                'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                'Pofta buna!',
              ],
            },
            {
              id: '12345678',
              photo:
                'https://images.unsplash.com/photo-1608835291093-394b0c943a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
              video: 'https://www.youtube.com/watch?v=g7_HKWvhj5I',
              name: 'Somon cu salata de brocoli si omleta cu cascaval',
              category: 'Masă mulsculară',
              kCal: '500 - 600',
              proteins: '35',
              carbohydrate: '50',
              fats: '24',
              ingredients: [
                '350g albus ou OptiSana (Lidl)',
                '3 felii paine integral Vel Pitar (Paco) / Tastino (Lidl) (important e sa fie 90-100g maxim cantitatea pentru ca fiecare marca are greutatea diferita la felii)',
                'Un avocado mediu (sa fie maro – asa stii ca e copt cum trebuie)',
              ],
              modeOfExecution: [
                'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                'Pofta buna!',
              ],
            },
          ],
        },
        daySix: {
          name: 'Sambata',
          recipes: [
            {
              id: '12345678',
              photo:
                'https://images.unsplash.com/photo-1608835291093-394b0c943a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
              video: 'https://www.youtube.com/watch?v=g7_HKWvhj5I',
              name: 'Somon cu salata de brocoli si omleta cu cascaval',
              category: 'Masă mulsculară',
              kCal: '500 - 600',
              proteins: '35',
              carbohydrate: '50',
              fats: '24',
              ingredients: [
                '350g albus ou OptiSana (Lidl)',
                '3 felii paine integral Vel Pitar (Paco) / Tastino (Lidl) (important e sa fie 90-100g maxim cantitatea pentru ca fiecare marca are greutatea diferita la felii)',
                'Un avocado mediu (sa fie maro – asa stii ca e copt cum trebuie)',
              ],
              modeOfExecution: [
                'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                'Pofta buna!',
              ],
            },
            {
              id: '12345678',
              photo:
                'https://images.unsplash.com/photo-1608835291093-394b0c943a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
              video: 'https://www.youtube.com/watch?v=g7_HKWvhj5I',
              name: 'Somon cu salata de brocoli si omleta cu cascaval',
              category: 'Masă mulsculară',
              kCal: '500 - 600',
              proteins: '35',
              carbohydrate: '50',
              fats: '24',
              ingredients: [
                '350g albus ou OptiSana (Lidl)',
                '3 felii paine integral Vel Pitar (Paco) / Tastino (Lidl) (important e sa fie 90-100g maxim cantitatea pentru ca fiecare marca are greutatea diferita la felii)',
                'Un avocado mediu (sa fie maro – asa stii ca e copt cum trebuie)',
              ],
              modeOfExecution: [
                'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                'Pofta buna!',
              ],
            },
            {
              id: '12345678',
              photo:
                'https://images.unsplash.com/photo-1608835291093-394b0c943a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
              video: 'https://www.youtube.com/watch?v=g7_HKWvhj5I',
              name: 'Somon cu salata de brocoli si omleta cu cascaval',
              category: 'Masă mulsculară',
              kCal: '500 - 600',
              proteins: '35',
              carbohydrate: '50',
              fats: '24',
              ingredients: [
                '350g albus ou OptiSana (Lidl)',
                '3 felii paine integral Vel Pitar (Paco) / Tastino (Lidl) (important e sa fie 90-100g maxim cantitatea pentru ca fiecare marca are greutatea diferita la felii)',
                'Un avocado mediu (sa fie maro – asa stii ca e copt cum trebuie)',
              ],
              modeOfExecution: [
                'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                'Pofta buna!',
              ],
            },
            {
              id: '12345678',
              photo:
                'https://images.unsplash.com/photo-1608835291093-394b0c943a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
              video: 'https://www.youtube.com/watch?v=g7_HKWvhj5I',
              name: 'Somon cu salata de brocoli si omleta cu cascaval',
              category: 'Masă mulsculară',
              kCal: '500 - 600',
              proteins: '35',
              carbohydrate: '50',
              fats: '24',
              ingredients: [
                '350g albus ou OptiSana (Lidl)',
                '3 felii paine integral Vel Pitar (Paco) / Tastino (Lidl) (important e sa fie 90-100g maxim cantitatea pentru ca fiecare marca are greutatea diferita la felii)',
                'Un avocado mediu (sa fie maro – asa stii ca e copt cum trebuie)',
              ],
              modeOfExecution: [
                'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                'Pofta buna!',
              ],
            },
          ],
        },
        daySeven: {
          name: 'Duminica',
          recipes: [
            {
              id: '12345678',
              photo:
                'https://images.unsplash.com/photo-1608835291093-394b0c943a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
              video: 'https://www.youtube.com/watch?v=g7_HKWvhj5I',
              name: 'Somon cu salata de brocoli si omleta cu cascaval',
              category: 'Masă mulsculară',
              kCal: '500 - 600',
              proteins: '35',
              carbohydrate: '50',
              fats: '24',
              ingredients: [
                '350g albus ou OptiSana (Lidl)',
                '3 felii paine integral Vel Pitar (Paco) / Tastino (Lidl) (important e sa fie 90-100g maxim cantitatea pentru ca fiecare marca are greutatea diferita la felii)',
                'Un avocado mediu (sa fie maro – asa stii ca e copt cum trebuie)',
              ],
              modeOfExecution: [
                'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                'Pofta buna!',
              ],
            },
            {
              id: '12345678',
              photo:
                'https://images.unsplash.com/photo-1608835291093-394b0c943a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
              video: 'https://www.youtube.com/watch?v=g7_HKWvhj5I',
              name: 'Somon cu salata de brocoli si omleta cu cascaval',
              category: 'Masă mulsculară',
              kCal: '500 - 600',
              proteins: '35',
              carbohydrate: '50',
              fats: '24',
              ingredients: [
                '350g albus ou OptiSana (Lidl)',
                '3 felii paine integral Vel Pitar (Paco) / Tastino (Lidl) (important e sa fie 90-100g maxim cantitatea pentru ca fiecare marca are greutatea diferita la felii)',
                'Un avocado mediu (sa fie maro – asa stii ca e copt cum trebuie)',
              ],
              modeOfExecution: [
                'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                'Pofta buna!',
              ],
            },
            {
              id: '12345678',
              photo:
                'https://images.unsplash.com/photo-1608835291093-394b0c943a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
              video: 'https://www.youtube.com/watch?v=g7_HKWvhj5I',
              name: 'Somon cu salata de brocoli si omleta cu cascaval',
              category: 'Masă mulsculară',
              kCal: '500 - 600',
              proteins: '35',
              carbohydrate: '50',
              fats: '24',
              ingredients: [
                '350g albus ou OptiSana (Lidl)',
                '3 felii paine integral Vel Pitar (Paco) / Tastino (Lidl) (important e sa fie 90-100g maxim cantitatea pentru ca fiecare marca are greutatea diferita la felii)',
                'Un avocado mediu (sa fie maro – asa stii ca e copt cum trebuie)',
              ],
              modeOfExecution: [
                'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                'Pofta buna!',
              ],
            },
            {
              id: '12345678',
              photo:
                'https://images.unsplash.com/photo-1608835291093-394b0c943a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
              video: 'https://www.youtube.com/watch?v=g7_HKWvhj5I',
              name: 'Somon cu salata de brocoli si omleta cu cascaval',
              category: 'Masă mulsculară',
              kCal: '500 - 600',
              proteins: '35',
              carbohydrate: '50',
              fats: '24',
              ingredients: [
                '350g albus ou OptiSana (Lidl)',
                '3 felii paine integral Vel Pitar (Paco) / Tastino (Lidl) (important e sa fie 90-100g maxim cantitatea pentru ca fiecare marca are greutatea diferita la felii)',
                'Un avocado mediu (sa fie maro – asa stii ca e copt cum trebuie)',
              ],
              modeOfExecution: [
                'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                'Pofta buna!',
              ],
            },
          ],
        },
      },
    },
  },
  {
    id: '1234',
    trainerUsername: 'Cristofer Arcand',
    name: 'Full Body Goal Crusher',
    type: 'PRO',
    category: 'Masă mulsculară',
    experience: 'Incepator',
    price: 123,
    workout: {
      id: '123455',
      photo:
        'https://images.unsplash.com/photo-1599058917212-d750089bc07e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80',
      name: 'Antrenament Full Body Goal Crusher',
      type: 'PRO',
      category: 'Masă mulsculară',
      description:
        'Planul alimentar este diferit pentru zilele de antrenament și zilele fără antrenament. În zilele de antrenament vei avea o masă pre-antrenament și o masă de după antrenament totalizând 6 mese în respectivă zi, pe când zilele fără antrenamente vor avea numai 5 mese pe zi.',
      daysToDo: {
        dayOne: {
          name: 'Luni',
          exercises: [
            {
              id: '123456',
              photo:
                'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
              video: 'https://www.youtube.com/watch?v=XoTXuZQ4SaU',
              name: 'Impins din orizontal cu bara',
              category: 'Masă mulsculară',
              effortZone: 'Antrenament piept + spate + abdomen',
              reps: '6',
              series: '3',
              modeOfExecution: [
                'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
              ],
            },
            {
              id: '123456',
              photo:
                'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
              video: 'https://www.youtube.com/watch?v=XoTXuZQ4SaU',
              name: 'Impins din orizontal cu bara',
              category: 'Masă mulsculară',
              effortZone: 'Antrenament piept + spate + abdomen',
              reps: '6',
              series: '3',
              modeOfExecution: [
                'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
              ],
            },
            {
              id: '123456',
              photo:
                'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
              video: 'https://www.youtube.com/watch?v=XoTXuZQ4SaU',
              name: 'Impins din orizontal cu bara',
              category: 'Masă mulsculară',
              effortZone: 'Antrenament piept + spate + abdomen',
              reps: '6',
              series: '3',
              modeOfExecution: [
                'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
              ],
            },
          ],
        },
        dayTwo: {
          name: 'Marti',
          exercises: [
            {
              id: '123456',
              photo:
                'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
              video: 'https://www.youtube.com/watch?v=XoTXuZQ4SaU',
              name: 'Impins din orizontal cu bara',
              category: 'Masă mulsculară',
              effortZone: 'Antrenament piept + spate + abdomen',
              reps: '6',
              series: '3',
              modeOfExecution: [
                'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
              ],
            },
            {
              id: '123456',
              photo:
                'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
              video: 'https://www.youtube.com/watch?v=XoTXuZQ4SaU',
              name: 'Impins din orizontal cu bara',
              category: 'Masă mulsculară',
              effortZone: 'Antrenament piept + spate + abdomen',
              reps: '6',
              series: '3',
              modeOfExecution: [
                'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
              ],
            },
            {
              id: '123456',
              photo:
                'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
              video: 'https://www.youtube.com/watch?v=XoTXuZQ4SaU',
              name: 'Impins din orizontal cu bara',
              category: 'Masă mulsculară',
              effortZone: 'Antrenament piept + spate + abdomen',
              reps: '6',
              series: '3',
              modeOfExecution: [
                'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
              ],
            },
          ],
        },
        dayThree: {
          name: 'Miercuri',
          exercises: [
            {
              id: '123456',
              photo:
                'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
              video: 'https://www.youtube.com/watch?v=XoTXuZQ4SaU',
              name: 'Impins din orizontal cu bara',
              category: 'Masă mulsculară',
              effortZone: 'Antrenament piept + spate + abdomen',
              reps: '6',
              series: '3',
              modeOfExecution: [
                'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
              ],
            },
            {
              id: '123456',
              photo:
                'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
              video: 'https://www.youtube.com/watch?v=XoTXuZQ4SaU',
              name: 'Impins din orizontal cu bara',
              category: 'Masă mulsculară',
              effortZone: 'Antrenament piept + spate + abdomen',
              reps: '6',
              series: '3',
              modeOfExecution: [
                'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
              ],
            },
            {
              id: '123456',
              photo:
                'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
              video: 'https://www.youtube.com/watch?v=XoTXuZQ4SaU',
              name: 'Impins din orizontal cu bara',
              category: 'Masă mulsculară',
              effortZone: 'Antrenament piept + spate + abdomen',
              reps: '6',
              series: '3',
              modeOfExecution: [
                'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
              ],
            },
          ],
        },
        dayFour: {
          name: 'Joi',
          exercises: [
            {
              id: '123456',
              photo:
                'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
              video: 'https://www.youtube.com/watch?v=XoTXuZQ4SaU',
              name: 'Impins din orizontal cu bara',
              category: 'Masă mulsculară',
              effortZone: 'Antrenament piept + spate + abdomen',
              reps: '6',
              series: '3',
              modeOfExecution: [
                'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
              ],
            },
            {
              id: '123456',
              photo:
                'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
              video: 'https://www.youtube.com/watch?v=XoTXuZQ4SaU',
              name: 'Impins din orizontal cu bara',
              category: 'Masă mulsculară',
              effortZone: 'Antrenament piept + spate + abdomen',
              reps: '6',
              series: '3',
              modeOfExecution: [
                'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
              ],
            },
            {
              id: '123456',
              photo:
                'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
              video: 'https://www.youtube.com/watch?v=XoTXuZQ4SaU',
              name: 'Impins din orizontal cu bara',
              category: 'Masă mulsculară',
              effortZone: 'Antrenament piept + spate + abdomen',
              reps: '6',
              series: '3',
              modeOfExecution: [
                'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
              ],
            },
          ],
        },
        dayFive: {
          name: 'Vineri',
          exercises: [
            {
              id: '123456',
              photo:
                'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
              video: 'https://www.youtube.com/watch?v=XoTXuZQ4SaU',
              name: 'Impins din orizontal cu bara',
              category: 'Masă mulsculară',
              effortZone: 'Antrenament piept + spate + abdomen',
              reps: '6',
              series: '3',
              modeOfExecution: [
                'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
              ],
            },
            {
              id: '123456',
              photo:
                'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
              video: 'https://www.youtube.com/watch?v=XoTXuZQ4SaU',
              name: 'Impins din orizontal cu bara',
              category: 'Masă mulsculară',
              effortZone: 'Antrenament piept + spate + abdomen',
              reps: '6',
              series: '3',
              modeOfExecution: [
                'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
              ],
            },
            {
              id: '123456',
              photo:
                'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
              video: 'https://www.youtube.com/watch?v=XoTXuZQ4SaU',
              name: 'Impins din orizontal cu bara',
              category: 'Masă mulsculară',
              effortZone: 'Antrenament piept + spate + abdomen',
              reps: '6',
              series: '3',
              modeOfExecution: [
                'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
              ],
            },
          ],
        },
        daySix: {
          name: 'Sambata',
          exercises: [
            {
              id: '123456',
              photo:
                'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
              video: 'https://www.youtube.com/watch?v=XoTXuZQ4SaU',
              name: 'Impins din orizontal cu bara',
              category: 'Masă mulsculară',
              effortZone: 'Antrenament piept + spate + abdomen',
              reps: '6',
              series: '3',
              modeOfExecution: [
                'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
              ],
            },
            {
              id: '123456',
              photo:
                'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
              video: 'https://www.youtube.com/watch?v=XoTXuZQ4SaU',
              name: 'Impins din orizontal cu bara',
              category: 'Masă mulsculară',
              effortZone: 'Antrenament piept + spate + abdomen',
              reps: '6',
              series: '3',
              modeOfExecution: [
                'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
              ],
            },
            {
              id: '123456',
              photo:
                'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
              video: 'https://www.youtube.com/watch?v=XoTXuZQ4SaU',
              name: 'Impins din orizontal cu bara',
              category: 'Masă mulsculară',
              effortZone: 'Antrenament piept + spate + abdomen',
              reps: '6',
              series: '3',
              modeOfExecution: [
                'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
              ],
            },
          ],
        },
        daySeven: {
          name: 'Duminica',
          exercises: [
            {
              id: '123456',
              photo:
                'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
              video: 'https://www.youtube.com/watch?v=XoTXuZQ4SaU',
              name: 'Impins din orizontal cu bara',
              category: 'Masă mulsculară',
              effortZone: 'Antrenament piept + spate + abdomen',
              reps: '6',
              series: '3',
              modeOfExecution: [
                'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
              ],
            },
            {
              id: '123456',
              photo:
                'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
              video: 'https://www.youtube.com/watch?v=XoTXuZQ4SaU',
              name: 'Impins din orizontal cu bara',
              category: 'Masă mulsculară',
              effortZone: 'Antrenament piept + spate + abdomen',
              reps: '6',
              series: '3',
              modeOfExecution: [
                'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
              ],
            },
            {
              id: '123456',
              photo:
                'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
              video: 'https://www.youtube.com/watch?v=XoTXuZQ4SaU',
              name: 'Impins din orizontal cu bara',
              category: 'Masă mulsculară',
              effortZone: 'Antrenament piept + spate + abdomen',
              reps: '6',
              series: '3',
              modeOfExecution: [
                'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
              ],
            },
          ],
        },
      },
    },
    nutrition: {
      id: '1234567',
      photo:
        'https://images.unsplash.com/photo-1600289031464-74d374b64991?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fG1lYWx8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
      name: 'Nutritie Full Body Goal Crusher',
      type: 'PRO',
      category: 'Masă mulsculară',
      description:
        'Planul alimentar este diferit pentru zilele de antrenament și zilele fără antrenament. În zilele de antrenament vei avea o masă pre-antrenament și o masă de după antrenament totalizând 6 mese în respectivă zi, pe când zilele fără antrenamente vor avea numai 5 mese pe zi.',
      kCal: '2500 - 3000',
      daysToDo: {
        dayOne: {
          name: 'Luni',
          recipes: [
            {
              id: '12345678',
              photo:
                'https://images.unsplash.com/photo-1608835291093-394b0c943a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
              video: 'https://www.youtube.com/watch?v=g7_HKWvhj5I',
              name: 'Somon cu salata de brocoli si omleta cu cascaval',
              category: 'Masă mulsculară',
              kCal: '500 - 600',
              proteins: '35',
              carbohydrate: '50',
              fats: '24',
              ingredients: [
                '350g albus ou OptiSana (Lidl)',
                '3 felii paine integral Vel Pitar (Paco) / Tastino (Lidl) (important e sa fie 90-100g maxim cantitatea pentru ca fiecare marca are greutatea diferita la felii)',
                'Un avocado mediu (sa fie maro – asa stii ca e copt cum trebuie)',
              ],
              modeOfExecution: [
                'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                'Pofta buna!',
              ],
            },
            {
              id: '12345678',
              photo:
                'https://images.unsplash.com/photo-1608835291093-394b0c943a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
              video: 'https://www.youtube.com/watch?v=g7_HKWvhj5I',
              name: 'Somon cu salata de brocoli si omleta cu cascaval',
              category: 'Masă mulsculară',
              kCal: '500 - 600',
              proteins: '35',
              carbohydrate: '50',
              fats: '24',
              ingredients: [
                '350g albus ou OptiSana (Lidl)',
                '3 felii paine integral Vel Pitar (Paco) / Tastino (Lidl) (important e sa fie 90-100g maxim cantitatea pentru ca fiecare marca are greutatea diferita la felii)',
                'Un avocado mediu (sa fie maro – asa stii ca e copt cum trebuie)',
              ],
              modeOfExecution: [
                'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                'Pofta buna!',
              ],
            },
            {
              id: '12345678',
              photo:
                'https://images.unsplash.com/photo-1608835291093-394b0c943a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
              video: 'https://www.youtube.com/watch?v=g7_HKWvhj5I',
              name: 'Somon cu salata de brocoli si omleta cu cascaval',
              category: 'Masă mulsculară',
              kCal: '500 - 600',
              proteins: '35',
              carbohydrate: '50',
              fats: '24',
              ingredients: [
                '350g albus ou OptiSana (Lidl)',
                '3 felii paine integral Vel Pitar (Paco) / Tastino (Lidl) (important e sa fie 90-100g maxim cantitatea pentru ca fiecare marca are greutatea diferita la felii)',
                'Un avocado mediu (sa fie maro – asa stii ca e copt cum trebuie)',
              ],
              modeOfExecution: [
                'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                'Pofta buna!',
              ],
            },
            {
              id: '12345678',
              photo:
                'https://images.unsplash.com/photo-1608835291093-394b0c943a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
              video: 'https://www.youtube.com/watch?v=g7_HKWvhj5I',
              name: 'Somon cu salata de brocoli si omleta cu cascaval',
              category: 'Masă mulsculară',
              kCal: '500 - 600',
              proteins: '35',
              carbohydrate: '50',
              fats: '24',
              ingredients: [
                '350g albus ou OptiSana (Lidl)',
                '3 felii paine integral Vel Pitar (Paco) / Tastino (Lidl) (important e sa fie 90-100g maxim cantitatea pentru ca fiecare marca are greutatea diferita la felii)',
                'Un avocado mediu (sa fie maro – asa stii ca e copt cum trebuie)',
              ],
              modeOfExecution: [
                'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                'Pofta buna!',
              ],
            },
          ],
        },
        dayTwo: {
          name: 'Marti',
          recipes: [
            {
              id: '12345678',
              photo:
                'https://images.unsplash.com/photo-1608835291093-394b0c943a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
              video: 'https://www.youtube.com/watch?v=g7_HKWvhj5I',
              name: 'Somon cu salata de brocoli si omleta cu cascaval',
              category: 'Masă mulsculară',
              kCal: '500 - 600',
              proteins: '35',
              carbohydrate: '50',
              fats: '24',
              ingredients: [
                '350g albus ou OptiSana (Lidl)',
                '3 felii paine integral Vel Pitar (Paco) / Tastino (Lidl) (important e sa fie 90-100g maxim cantitatea pentru ca fiecare marca are greutatea diferita la felii)',
                'Un avocado mediu (sa fie maro – asa stii ca e copt cum trebuie)',
              ],
              modeOfExecution: [
                'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                'Pofta buna!',
              ],
            },
            {
              id: '12345678',
              photo:
                'https://images.unsplash.com/photo-1608835291093-394b0c943a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
              video: 'https://www.youtube.com/watch?v=g7_HKWvhj5I',
              name: 'Somon cu salata de brocoli si omleta cu cascaval',
              category: 'Masă mulsculară',
              kCal: '500 - 600',
              proteins: '35',
              carbohydrate: '50',
              fats: '24',
              ingredients: [
                '350g albus ou OptiSana (Lidl)',
                '3 felii paine integral Vel Pitar (Paco) / Tastino (Lidl) (important e sa fie 90-100g maxim cantitatea pentru ca fiecare marca are greutatea diferita la felii)',
                'Un avocado mediu (sa fie maro – asa stii ca e copt cum trebuie)',
              ],
              modeOfExecution: [
                'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                'Pofta buna!',
              ],
            },
            {
              id: '12345678',
              photo:
                'https://images.unsplash.com/photo-1608835291093-394b0c943a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
              video: 'https://www.youtube.com/watch?v=g7_HKWvhj5I',
              name: 'Somon cu salata de brocoli si omleta cu cascaval',
              category: 'Masă mulsculară',
              kCal: '500 - 600',
              proteins: '35',
              carbohydrate: '50',
              fats: '24',
              ingredients: [
                '350g albus ou OptiSana (Lidl)',
                '3 felii paine integral Vel Pitar (Paco) / Tastino (Lidl) (important e sa fie 90-100g maxim cantitatea pentru ca fiecare marca are greutatea diferita la felii)',
                'Un avocado mediu (sa fie maro – asa stii ca e copt cum trebuie)',
              ],
              modeOfExecution: [
                'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                'Pofta buna!',
              ],
            },
            {
              id: '12345678',
              photo:
                'https://images.unsplash.com/photo-1608835291093-394b0c943a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
              video: 'https://www.youtube.com/watch?v=g7_HKWvhj5I',
              name: 'Somon cu salata de brocoli si omleta cu cascaval',
              category: 'Masă mulsculară',
              kCal: '500 - 600',
              proteins: '35',
              carbohydrate: '50',
              fats: '24',
              ingredients: [
                '350g albus ou OptiSana (Lidl)',
                '3 felii paine integral Vel Pitar (Paco) / Tastino (Lidl) (important e sa fie 90-100g maxim cantitatea pentru ca fiecare marca are greutatea diferita la felii)',
                'Un avocado mediu (sa fie maro – asa stii ca e copt cum trebuie)',
              ],
              modeOfExecution: [
                'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                'Pofta buna!',
              ],
            },
          ],
        },
        dayThree: {
          name: 'Miercuri',
          recipes: [
            {
              id: '12345678',
              photo:
                'https://images.unsplash.com/photo-1608835291093-394b0c943a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
              video: 'https://www.youtube.com/watch?v=g7_HKWvhj5I',
              name: 'Somon cu salata de brocoli si omleta cu cascaval',
              category: 'Masă mulsculară',
              kCal: '500 - 600',
              proteins: '35',
              carbohydrate: '50',
              fats: '24',
              ingredients: [
                '350g albus ou OptiSana (Lidl)',
                '3 felii paine integral Vel Pitar (Paco) / Tastino (Lidl) (important e sa fie 90-100g maxim cantitatea pentru ca fiecare marca are greutatea diferita la felii)',
                'Un avocado mediu (sa fie maro – asa stii ca e copt cum trebuie)',
              ],
              modeOfExecution: [
                'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                'Pofta buna!',
              ],
            },
            {
              id: '12345678',
              photo:
                'https://images.unsplash.com/photo-1608835291093-394b0c943a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
              video: 'https://www.youtube.com/watch?v=g7_HKWvhj5I',
              name: 'Somon cu salata de brocoli si omleta cu cascaval',
              category: 'Masă mulsculară',
              kCal: '500 - 600',
              proteins: '35',
              carbohydrate: '50',
              fats: '24',
              ingredients: [
                '350g albus ou OptiSana (Lidl)',
                '3 felii paine integral Vel Pitar (Paco) / Tastino (Lidl) (important e sa fie 90-100g maxim cantitatea pentru ca fiecare marca are greutatea diferita la felii)',
                'Un avocado mediu (sa fie maro – asa stii ca e copt cum trebuie)',
              ],
              modeOfExecution: [
                'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                'Pofta buna!',
              ],
            },
            {
              id: '12345678',
              photo:
                'https://images.unsplash.com/photo-1608835291093-394b0c943a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
              video: 'https://www.youtube.com/watch?v=g7_HKWvhj5I',
              name: 'Somon cu salata de brocoli si omleta cu cascaval',
              category: 'Masă mulsculară',
              kCal: '500 - 600',
              proteins: '35',
              carbohydrate: '50',
              fats: '24',
              ingredients: [
                '350g albus ou OptiSana (Lidl)',
                '3 felii paine integral Vel Pitar (Paco) / Tastino (Lidl) (important e sa fie 90-100g maxim cantitatea pentru ca fiecare marca are greutatea diferita la felii)',
                'Un avocado mediu (sa fie maro – asa stii ca e copt cum trebuie)',
              ],
              modeOfExecution: [
                'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                'Pofta buna!',
              ],
            },
            {
              id: '12345678',
              photo:
                'https://images.unsplash.com/photo-1608835291093-394b0c943a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
              video: 'https://www.youtube.com/watch?v=g7_HKWvhj5I',
              name: 'Somon cu salata de brocoli si omleta cu cascaval',
              category: 'Masă mulsculară',
              kCal: '500 - 600',
              proteins: '35',
              carbohydrate: '50',
              fats: '24',
              ingredients: [
                '350g albus ou OptiSana (Lidl)',
                '3 felii paine integral Vel Pitar (Paco) / Tastino (Lidl) (important e sa fie 90-100g maxim cantitatea pentru ca fiecare marca are greutatea diferita la felii)',
                'Un avocado mediu (sa fie maro – asa stii ca e copt cum trebuie)',
              ],
              modeOfExecution: [
                'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                'Pofta buna!',
              ],
            },
          ],
        },
        dayFour: {
          name: 'Joi',
          recipes: [
            {
              id: '12345678',
              photo:
                'https://images.unsplash.com/photo-1608835291093-394b0c943a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
              video: 'https://www.youtube.com/watch?v=g7_HKWvhj5I',
              name: 'Somon cu salata de brocoli si omleta cu cascaval',
              category: 'Masă mulsculară',
              kCal: '500 - 600',
              proteins: '35',
              carbohydrate: '50',
              fats: '24',
              ingredients: [
                '350g albus ou OptiSana (Lidl)',
                '3 felii paine integral Vel Pitar (Paco) / Tastino (Lidl) (important e sa fie 90-100g maxim cantitatea pentru ca fiecare marca are greutatea diferita la felii)',
                'Un avocado mediu (sa fie maro – asa stii ca e copt cum trebuie)',
              ],
              modeOfExecution: [
                'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                'Pofta buna!',
              ],
            },
            {
              id: '12345678',
              photo:
                'https://images.unsplash.com/photo-1608835291093-394b0c943a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
              video: 'https://www.youtube.com/watch?v=g7_HKWvhj5I',
              name: 'Somon cu salata de brocoli si omleta cu cascaval',
              category: 'Masă mulsculară',
              kCal: '500 - 600',
              proteins: '35',
              carbohydrate: '50',
              fats: '24',
              ingredients: [
                '350g albus ou OptiSana (Lidl)',
                '3 felii paine integral Vel Pitar (Paco) / Tastino (Lidl) (important e sa fie 90-100g maxim cantitatea pentru ca fiecare marca are greutatea diferita la felii)',
                'Un avocado mediu (sa fie maro – asa stii ca e copt cum trebuie)',
              ],
              modeOfExecution: [
                'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                'Pofta buna!',
              ],
            },
            {
              id: '12345678',
              photo:
                'https://images.unsplash.com/photo-1608835291093-394b0c943a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
              video: 'https://www.youtube.com/watch?v=g7_HKWvhj5I',
              name: 'Somon cu salata de brocoli si omleta cu cascaval',
              category: 'Masă mulsculară',
              kCal: '500 - 600',
              proteins: '35',
              carbohydrate: '50',
              fats: '24',
              ingredients: [
                '350g albus ou OptiSana (Lidl)',
                '3 felii paine integral Vel Pitar (Paco) / Tastino (Lidl) (important e sa fie 90-100g maxim cantitatea pentru ca fiecare marca are greutatea diferita la felii)',
                'Un avocado mediu (sa fie maro – asa stii ca e copt cum trebuie)',
              ],
              modeOfExecution: [
                'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                'Pofta buna!',
              ],
            },
            {
              id: '12345678',
              photo:
                'https://images.unsplash.com/photo-1608835291093-394b0c943a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
              video: 'https://www.youtube.com/watch?v=g7_HKWvhj5I',
              name: 'Somon cu salata de brocoli si omleta cu cascaval',
              category: 'Masă mulsculară',
              kCal: '500 - 600',
              proteins: '35',
              carbohydrate: '50',
              fats: '24',
              ingredients: [
                '350g albus ou OptiSana (Lidl)',
                '3 felii paine integral Vel Pitar (Paco) / Tastino (Lidl) (important e sa fie 90-100g maxim cantitatea pentru ca fiecare marca are greutatea diferita la felii)',
                'Un avocado mediu (sa fie maro – asa stii ca e copt cum trebuie)',
              ],
              modeOfExecution: [
                'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                'Pofta buna!',
              ],
            },
          ],
        },
        dayFive: {
          name: 'Vineri',
          recipes: [
            {
              id: '12345678',
              photo:
                'https://images.unsplash.com/photo-1608835291093-394b0c943a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
              video: 'https://www.youtube.com/watch?v=g7_HKWvhj5I',
              name: 'Somon cu salata de brocoli si omleta cu cascaval',
              category: 'Masă mulsculară',
              kCal: '500 - 600',
              proteins: '35',
              carbohydrate: '50',
              fats: '24',
              ingredients: [
                '350g albus ou OptiSana (Lidl)',
                '3 felii paine integral Vel Pitar (Paco) / Tastino (Lidl) (important e sa fie 90-100g maxim cantitatea pentru ca fiecare marca are greutatea diferita la felii)',
                'Un avocado mediu (sa fie maro – asa stii ca e copt cum trebuie)',
              ],
              modeOfExecution: [
                'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                'Pofta buna!',
              ],
            },
            {
              id: '12345678',
              photo:
                'https://images.unsplash.com/photo-1608835291093-394b0c943a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
              video: 'https://www.youtube.com/watch?v=g7_HKWvhj5I',
              name: 'Somon cu salata de brocoli si omleta cu cascaval',
              category: 'Masă mulsculară',
              kCal: '500 - 600',
              proteins: '35',
              carbohydrate: '50',
              fats: '24',
              ingredients: [
                '350g albus ou OptiSana (Lidl)',
                '3 felii paine integral Vel Pitar (Paco) / Tastino (Lidl) (important e sa fie 90-100g maxim cantitatea pentru ca fiecare marca are greutatea diferita la felii)',
                'Un avocado mediu (sa fie maro – asa stii ca e copt cum trebuie)',
              ],
              modeOfExecution: [
                'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                'Pofta buna!',
              ],
            },
            {
              id: '12345678',
              photo:
                'https://images.unsplash.com/photo-1608835291093-394b0c943a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
              video: 'https://www.youtube.com/watch?v=g7_HKWvhj5I',
              name: 'Somon cu salata de brocoli si omleta cu cascaval',
              category: 'Masă mulsculară',
              kCal: '500 - 600',
              proteins: '35',
              carbohydrate: '50',
              fats: '24',
              ingredients: [
                '350g albus ou OptiSana (Lidl)',
                '3 felii paine integral Vel Pitar (Paco) / Tastino (Lidl) (important e sa fie 90-100g maxim cantitatea pentru ca fiecare marca are greutatea diferita la felii)',
                'Un avocado mediu (sa fie maro – asa stii ca e copt cum trebuie)',
              ],
              modeOfExecution: [
                'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                'Pofta buna!',
              ],
            },
            {
              id: '12345678',
              photo:
                'https://images.unsplash.com/photo-1608835291093-394b0c943a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
              video: 'https://www.youtube.com/watch?v=g7_HKWvhj5I',
              name: 'Somon cu salata de brocoli si omleta cu cascaval',
              category: 'Masă mulsculară',
              kCal: '500 - 600',
              proteins: '35',
              carbohydrate: '50',
              fats: '24',
              ingredients: [
                '350g albus ou OptiSana (Lidl)',
                '3 felii paine integral Vel Pitar (Paco) / Tastino (Lidl) (important e sa fie 90-100g maxim cantitatea pentru ca fiecare marca are greutatea diferita la felii)',
                'Un avocado mediu (sa fie maro – asa stii ca e copt cum trebuie)',
              ],
              modeOfExecution: [
                'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                'Pofta buna!',
              ],
            },
          ],
        },
        daySix: {
          name: 'Sambata',
          recipes: [
            {
              id: '12345678',
              photo:
                'https://images.unsplash.com/photo-1608835291093-394b0c943a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
              video: 'https://www.youtube.com/watch?v=g7_HKWvhj5I',
              name: 'Somon cu salata de brocoli si omleta cu cascaval',
              category: 'Masă mulsculară',
              kCal: '500 - 600',
              proteins: '35',
              carbohydrate: '50',
              fats: '24',
              ingredients: [
                '350g albus ou OptiSana (Lidl)',
                '3 felii paine integral Vel Pitar (Paco) / Tastino (Lidl) (important e sa fie 90-100g maxim cantitatea pentru ca fiecare marca are greutatea diferita la felii)',
                'Un avocado mediu (sa fie maro – asa stii ca e copt cum trebuie)',
              ],
              modeOfExecution: [
                'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                'Pofta buna!',
              ],
            },
            {
              id: '12345678',
              photo:
                'https://images.unsplash.com/photo-1608835291093-394b0c943a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
              video: 'https://www.youtube.com/watch?v=g7_HKWvhj5I',
              name: 'Somon cu salata de brocoli si omleta cu cascaval',
              category: 'Masă mulsculară',
              kCal: '500 - 600',
              proteins: '35',
              carbohydrate: '50',
              fats: '24',
              ingredients: [
                '350g albus ou OptiSana (Lidl)',
                '3 felii paine integral Vel Pitar (Paco) / Tastino (Lidl) (important e sa fie 90-100g maxim cantitatea pentru ca fiecare marca are greutatea diferita la felii)',
                'Un avocado mediu (sa fie maro – asa stii ca e copt cum trebuie)',
              ],
              modeOfExecution: [
                'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                'Pofta buna!',
              ],
            },
            {
              id: '12345678',
              photo:
                'https://images.unsplash.com/photo-1608835291093-394b0c943a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
              video: 'https://www.youtube.com/watch?v=g7_HKWvhj5I',
              name: 'Somon cu salata de brocoli si omleta cu cascaval',
              category: 'Masă mulsculară',
              kCal: '500 - 600',
              proteins: '35',
              carbohydrate: '50',
              fats: '24',
              ingredients: [
                '350g albus ou OptiSana (Lidl)',
                '3 felii paine integral Vel Pitar (Paco) / Tastino (Lidl) (important e sa fie 90-100g maxim cantitatea pentru ca fiecare marca are greutatea diferita la felii)',
                'Un avocado mediu (sa fie maro – asa stii ca e copt cum trebuie)',
              ],
              modeOfExecution: [
                'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                'Pofta buna!',
              ],
            },
            {
              id: '12345678',
              photo:
                'https://images.unsplash.com/photo-1608835291093-394b0c943a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
              video: 'https://www.youtube.com/watch?v=g7_HKWvhj5I',
              name: 'Somon cu salata de brocoli si omleta cu cascaval',
              category: 'Masă mulsculară',
              kCal: '500 - 600',
              proteins: '35',
              carbohydrate: '50',
              fats: '24',
              ingredients: [
                '350g albus ou OptiSana (Lidl)',
                '3 felii paine integral Vel Pitar (Paco) / Tastino (Lidl) (important e sa fie 90-100g maxim cantitatea pentru ca fiecare marca are greutatea diferita la felii)',
                'Un avocado mediu (sa fie maro – asa stii ca e copt cum trebuie)',
              ],
              modeOfExecution: [
                'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                'Pofta buna!',
              ],
            },
          ],
        },
        daySeven: {
          name: 'Duminica',
          recipes: [
            {
              id: '12345678',
              photo:
                'https://images.unsplash.com/photo-1608835291093-394b0c943a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
              video: 'https://www.youtube.com/watch?v=g7_HKWvhj5I',
              name: 'Somon cu salata de brocoli si omleta cu cascaval',
              category: 'Masă mulsculară',
              kCal: '500 - 600',
              proteins: '35',
              carbohydrate: '50',
              fats: '24',
              ingredients: [
                '350g albus ou OptiSana (Lidl)',
                '3 felii paine integral Vel Pitar (Paco) / Tastino (Lidl) (important e sa fie 90-100g maxim cantitatea pentru ca fiecare marca are greutatea diferita la felii)',
                'Un avocado mediu (sa fie maro – asa stii ca e copt cum trebuie)',
              ],
              modeOfExecution: [
                'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                'Pofta buna!',
              ],
            },
            {
              id: '12345678',
              photo:
                'https://images.unsplash.com/photo-1608835291093-394b0c943a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
              video: 'https://www.youtube.com/watch?v=g7_HKWvhj5I',
              name: 'Somon cu salata de brocoli si omleta cu cascaval',
              category: 'Masă mulsculară',
              kCal: '500 - 600',
              proteins: '35',
              carbohydrate: '50',
              fats: '24',
              ingredients: [
                '350g albus ou OptiSana (Lidl)',
                '3 felii paine integral Vel Pitar (Paco) / Tastino (Lidl) (important e sa fie 90-100g maxim cantitatea pentru ca fiecare marca are greutatea diferita la felii)',
                'Un avocado mediu (sa fie maro – asa stii ca e copt cum trebuie)',
              ],
              modeOfExecution: [
                'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                'Pofta buna!',
              ],
            },
            {
              id: '12345678',
              photo:
                'https://images.unsplash.com/photo-1608835291093-394b0c943a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
              video: 'https://www.youtube.com/watch?v=g7_HKWvhj5I',
              name: 'Somon cu salata de brocoli si omleta cu cascaval',
              category: 'Masă mulsculară',
              kCal: '500 - 600',
              proteins: '35',
              carbohydrate: '50',
              fats: '24',
              ingredients: [
                '350g albus ou OptiSana (Lidl)',
                '3 felii paine integral Vel Pitar (Paco) / Tastino (Lidl) (important e sa fie 90-100g maxim cantitatea pentru ca fiecare marca are greutatea diferita la felii)',
                'Un avocado mediu (sa fie maro – asa stii ca e copt cum trebuie)',
              ],
              modeOfExecution: [
                'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                'Pofta buna!',
              ],
            },
            {
              id: '12345678',
              photo:
                'https://images.unsplash.com/photo-1608835291093-394b0c943a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
              video: 'https://www.youtube.com/watch?v=g7_HKWvhj5I',
              name: 'Somon cu salata de brocoli si omleta cu cascaval',
              category: 'Masă mulsculară',
              kCal: '500 - 600',
              proteins: '35',
              carbohydrate: '50',
              fats: '24',
              ingredients: [
                '350g albus ou OptiSana (Lidl)',
                '3 felii paine integral Vel Pitar (Paco) / Tastino (Lidl) (important e sa fie 90-100g maxim cantitatea pentru ca fiecare marca are greutatea diferita la felii)',
                'Un avocado mediu (sa fie maro – asa stii ca e copt cum trebuie)',
              ],
              modeOfExecution: [
                'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                'Pofta buna!',
              ],
            },
          ],
        },
      },
    },
  },
];
