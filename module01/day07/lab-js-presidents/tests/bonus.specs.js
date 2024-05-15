describe("BONUS", () => {
  // Bonus: Iteration 5
  describe("Bonus: Iteration 5 | Age at Inauguration", () => {
    it("should take 1 argument (presidents)", () => {
      expect(getAgeAtInauguration).toBeDefined();
      expect(getAgeAtInauguration.length).toEqual(1);
    });

    it("should use the 'map()' method to iterate over the presidents array", () => {
      const testPresidents = [
        {
          name: "George Washington",
          tookOffice: "1789-04-30",
          leftOffice: "1797-03-04",
          birthYear: 1732,
          deathYear: 1799,
          party: "No Party",
        },
        {
          name: "John Adams",
          tookOffice: "1797-03-04",
          leftOffice: "1801-03-04",
          birthYear: 1735,
          deathYear: 1826,
          party: "Federalist",
        },
      ];

      const mapSpy = spyOn(testPresidents, "map");

      getAgeAtInauguration(testPresidents);
      expect(mapSpy).toHaveBeenCalled();
      expect(mapSpy).toHaveBeenCalledWith(jasmine.any(Function));
    });

    it("should return an array of objects", () => {
      const testPresidents = [
        {
          name: "George Washington",
          tookOffice: "1789-04-30",
          leftOffice: "1797-03-04",
          birthYear: 1732,
          deathYear: 1799,
          party: "No Party",
        },
        {
          name: "John Adams",
          tookOffice: "1797-03-04",
          leftOffice: "1801-03-04",
          birthYear: 1735,
          deathYear: 1826,
          party: "Federalist",
        },
      ];

      expect(getAgeAtInauguration(testPresidents)).toEqual(jasmine.any(Array));
      expect(getAgeAtInauguration(testPresidents)[0]).toEqual(
        jasmine.any(Object)
      );
    });

    it("should return an array of objects with the new property 'ageAtInauguration'", () => {
      testPresidents = [
        {
          id: 35,
          name: "John F. Kennedy",
          birthYear: 1917,
          deathYear: 1963,
          tookOffice: 1961,
          leftOffice: 1963,
          party: "Democratic",
        },
        {
          id: 36,
          name: "Lyndon B. Johnson",
          birthYear: 1908,
          deathYear: 1973,
          tookOffice: 1963,
          leftOffice: 1969,
          party: "Democratic",
        },
        {
          id: 37,
          name: "Richard Nixon",
          birthYear: 1913,
          deathYear: 1994,
          tookOffice: 1969,
          leftOffice: 1974,
          party: "Republican",
        },
      ];

      const result = getAgeAtInauguration(testPresidents);

      testPresidents.forEach((president, index) => {
        const updatedPresident = result[index];
        expect(updatedPresident.ageAtInauguration).toEqual(
          president.tookOffice - president.birthYear
        );
      });
    });
  });

  // Bonus: Iteration 6
  describe("Bonus: Iteration 6 | Presidents Born After", () => {
    it("should take 2 arguments (presidents, year)", () => {
      expect(getPresidentsBornAfter).toBeDefined();
      expect(getPresidentsBornAfter.length).toEqual(2);
    });

    it("should use the 'filter()' method to filter the presidents array", () => {
      const testPresidents = [
        { name: "George Washington", tookOffice: 1789, leftOffice: 1797 },
        { name: "George H. W. Bush", tookOffice: 1989, leftOffice: 1993 },
        { name: "Bill Clinton", tookOffice: 1993, leftOffice: 2001 },
        { name: "Barack Obama", tookOffice: 2009, leftOffice: 2017 },
        { name: "Donald Trump", tookOffice: 2017, leftOffice: 2021 },
      ];

      const filterSpy = spyOn(testPresidents, "filter");

      getPresidentsBornAfter(testPresidents);
      expect(filterSpy).toHaveBeenCalled();
      expect(filterSpy).toHaveBeenCalledWith(jasmine.any(Function));
    });

    it("should return an array of objects", () => {
      const testPresidents = [
        { name: "George Washington", birthYear: 1732 },
        { name: "John Adams", birthYear: 1735 },
        { name: "George H. W. Bush", birthYear: 1924 },
        { name: "Bill Clinton", birthYear: 1946 },
        { name: "Barack Obama", birthYear: 1961 },
      ];

      expect(getPresidentsBornAfter(testPresidents, 1900)).toEqual(
        jasmine.any(Array)
      );
      expect(getPresidentsBornAfter(testPresidents, 1900)[0]).toEqual(
        jasmine.any(Object)
      );
    });

    it("should return an array containing only the presidents born after the specified year", () => {
      const testPresidents = [
        { name: "George Washington", birthYear: 1732 },
        { name: "John Adams", birthYear: 1735 },
        { name: "George H. W. Bush", birthYear: 1924 },
        { name: "Bill Clinton", birthYear: 1946 },
        { name: "Barack Obama", birthYear: 1961 },
      ];

      expect(getPresidentsBornAfter(testPresidents, 1924)).toEqual([
        { name: "Bill Clinton", birthYear: 1946 },
        { name: "Barack Obama", birthYear: 1961 },
      ]);
    });
  });

  // Bonus: Iteration 7
  describe("Bonus: Iteration 7 | Count Republican Presidents", () => {
    it("should take 1 argument (presidents)", () => {
      expect(typeof countRepublicanPresidents).toEqual("function");
      expect(countRepublicanPresidents.length).toEqual(1);
    });

    it("should use the 'reduce()' method to iterate over the presidents array passed as argument", () => {
      const testPresidents = [
        {
          name: "John F. Kennedy",
          party: "Democratic",
          tookOffice: 1961,
          leftOffice: 1963,
        },
        {
          name: "Ronald Reagan",
          party: "Republican",
          tookOffice: 1981,
          leftOffice: 1989,
        },
        {
          name: "John Quincy Adams",
          party: "Federalist",
          tookOffice: 1797,
          leftOffice: 1801,
        },
        {
          name: "George W. Bush",
          party: "Republican",
          tookOffice: 2001,
          leftOffice: 2009,
        },
        {
          name: "Richard Nixon",
          party: "Republican",
          tookOffice: 1969,
          leftOffice: 1974,
        },
      ];

      const reduceSpy = spyOn(testPresidents, "reduce").and.returnValue(3);

      const result = countRepublicanPresidents(testPresidents);
      expect(reduceSpy).toHaveBeenCalled();
      expect(reduceSpy).toHaveBeenCalledWith(
        jasmine.any(Function),
        jasmine.any(Number)
      );
      expect(result).toEqual(3);
    });

    it("should return a number", () => {
      const testPresidents = [
        {
          name: "John F. Kennedy",
          party: "Democratic",
          tookOffice: 1961,
          leftOffice: 1963,
        },
        {
          name: "Ronald Reagan",
          party: "Republican",
          tookOffice: 1981,
          leftOffice: 1989,
        },
        {
          name: "John Quincy Adams",
          party: "Federalist",
          tookOffice: 1797,
          leftOffice: 1801,
        },
        {
          name: "George Washington",
          party: null,
          tookOffice: 1789,
          leftOffice: 1797,
        },
      ];

      const result = countRepublicanPresidents(testPresidents);

      expect(result).toEqual(jasmine.any(Number));
    });

    it("should return the total number of presidents who belonged to the Republican party", () => {
      const testPresidents = [
        { name: "John F. Kennedy", party: "Democratic" },
        { name: "Ronald Reagan", party: "Republican" },
        { name: "Ulysses S. Grant", party: "Republican" },
        { name: "George Washington", party: null },
        { name: "Gerald Ford", party: "Republican" },
        { name: "Richard Nixon", party: "Republican" },
      ];

      const result = countRepublicanPresidents(testPresidents);

      expect(result).toEqual(4);
    });
  });

  // Bonus: Iteration 8
  describe("Bonus: Iteration 8 | Sort Presidents by Name", () => {
    it("should take 1 argument (presidents)", () => {
      expect(sortPresidentsByName).toBeDefined();
      expect(sortPresidentsByName.length).toEqual(1);
    });

    it("should use the 'sort()' method to sort the presidents array", () => {
      const testPresidents = [
        { name: "George Washington" },
        { name: "John Adams" },
        { name: "George H. W. Bush" },
        { name: "Bill Clinton" },
        { name: "Barack Obama" },
      ];

      const sortSpy = spyOn(testPresidents, "sort");

      sortPresidentsByName(testPresidents);
      expect(sortSpy).toHaveBeenCalled();
      expect(sortSpy).toHaveBeenCalledWith(jasmine.any(Function));
    });

    it("should return an array of objects", () => {
      const testPresidents = [
        { name: "George Washington" },
        { name: "John Adams" },
        { name: "George H. W. Bush" },
        { name: "Bill Clinton" },
        { name: "Barack Obama" },
      ];

      const result = sortPresidentsByName(testPresidents);

      expect(result).toEqual(jasmine.any(Array));
      expect(result[0]).toEqual(jasmine.any(Object));
    });

    it("should return an array of objects sorted alphabetically by the 'name' property", () => {
      const testPresidents = [
        { name: "George Washington" },
        { name: "John Adams" },
        { name: "George H. W. Bush" },
        { name: "Bill Clinton" },
        { name: "Barack Obama" },
        { name: "Andrew Jackson" },
      ];

      const result = sortPresidentsByName(testPresidents);

      expect(result).toEqual([
        { name: "Andrew Jackson" },
        { name: "Barack Obama" },
        { name: "Bill Clinton" },
        { name: "George H. W. Bush" },
        { name: "George Washington" },
        { name: "John Adams" },
      ]);
    });
  });
});
