const sortCoffee = (data) => {

    const sortList = (array) => {

        for (let i = 0; i < array.length; i++) {

            if (!array[i].inStock) {

                array.splice(i, 1);
                i--;

            }
        }

        array.sort((a, b) => {
            if (a.name < b.name) {
                return -1;
            }

            if (b.name < a.name) {
                return 1;
            }

            return 0;
        });

        array.sort((a, b) => {
            if (a.timesOrdered > b.timesOrdered) {
                return -1;
            }

            if (b.timesOrdered > a.timesOrdered) {
                return 1;
            }

            return 0;
        });

    }

    sortList(data.espresso);
    sortList(data.lungo);

    return data;
}

export default sortCoffee;