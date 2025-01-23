export default {
    moduleFileExtensions: ["ts", "js"],
    transform: {
      "^.+\\.(t|j)s$": "ts-jest"
    },
    testEnvironment: "node",
    testRegex: '.*\\.e2e-spec\\.ts$', // Ajuste o regex para testes e2e
  };
  