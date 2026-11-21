/*
 * Trivia Overflow - banco de preguntas.
 * Basado en "Complementos de Matemática II" (FCEIA, Universidad Nacional de Rosario).
 * Fuente: "Complementos de Matemática II" (LCC, FCEIA - UNR, 2026), docs/ComplementosII.pdf
 *
 * Para agregar una pregunta, sumá un objeto al arreglo:
 *   {
 *     topic: "Cap. 4 · Álgebras de Boole",   // se muestra arriba de la pregunta
 *     ref: "Def. 4.3.1",                      // definición/teorema del apunte
 *     q: "Texto de la pregunta",
 *     options: ["A", "B", "C", "D"],          // exactamente 4, sin repetir
 *     answer: 0,                              // índice (0-3) de la opción correcta
 *     explain: "Explicación de una línea que se muestra al responder."
 *   }
 *
 * El orden de las opciones se mezcla en cada partida, así que podés escribirlas en cualquier orden.
 * Cada partida usa 8 preguntas al azar de los temas elegidos.
 *
 * El capítulo se toma del "Cap. N" al inicio de `topic` y debe estar en BYTE_RUN_CHAPTERS.
 * Un tema necesita al menos 8 preguntas para poder jugarse solo.
 */
var BYTE_RUN_CHAPTERS = {
  1: "Relaciones y funciones",
  2: "Conjuntos ordenados",
  3: "Retículos",
  4: "Retículos especiales y álgebras de Boole",
  5: "Operaciones en un conjunto",
  6: "Estructuras algebraicas",
  7: "Grupos",
  8: "Categorías y funtores",
  9: "Construcciones en categorías",
  10: "Equivalencias, adjunciones y mónadas"
};

var BYTE_RUN_QUESTIONS = [
  /* ---------- Capítulo 1: Relaciones y funciones ---------- */
  {
    topic: "Cap. 1 · Relaciones", ref: "Def. 1.1.1",
    q: "Una relación R de A en B es:",
    options: ["Un subconjunto de A × B", "Una función de A en B", "Un subconjunto de A ∪ B", "Un único par ordenado (a, b)"],
    answer: 0,
    explain: "Una relación de A en B es cualquier subconjunto del producto cartesiano A × B."
  },
  {
    topic: "Cap. 1 · Relaciones", ref: "Def. 1.4.8",
    q: "Una relación reflexiva, simétrica y transitiva se denomina:",
    options: ["Relación de equivalencia", "Orden parcial", "Preorden", "Orden total"],
    answer: 0,
    explain: "Reflexiva + simétrica + transitiva = relación de equivalencia."
  },
  {
    topic: "Cap. 1 · Relaciones", ref: "Def. 1.4.8",
    q: "Una relación que es reflexiva y transitiva (sin pedir nada más) es:",
    options: ["Un preorden", "Una relación de equivalencia", "Un orden parcial", "Un buen orden"],
    answer: 0,
    explain: "Un preorden es una relación reflexiva y transitiva."
  },
  {
    topic: "Cap. 1 · Relaciones", ref: "Def. 1.4.8",
    q: "Un orden parcial es una relación:",
    options: ["Reflexiva, antisimétrica y transitiva", "Reflexiva, simétrica y transitiva", "Simétrica y transitiva", "Reflexiva y simétrica"],
    answer: 0,
    explain: "Relación de orden = reflexiva, antisimétrica y transitiva."
  },
  {
    topic: "Cap. 1 · Relaciones", ref: "Lema 1.3.2",
    q: "Si R es una relación de A en B, Dom(R⁻¹) es igual a:",
    options: ["Im(R)", "Dom(R)", "A", "A × B"],
    answer: 0,
    explain: "Invertir los pares intercambia dominio e imagen: Dom(R⁻¹) = Im(R) e Im(R⁻¹) = Dom(R)."
  },
  {
    topic: "Cap. 1 · Relaciones", ref: "Lema 1.3.5",
    q: "Si R es una relación funcional, R⁻¹ es una relación funcional si y sólo si R es:",
    options: ["Biyectiva", "Inyectiva", "Sobreyectiva", "Reflexiva"],
    answer: 0,
    explain: "R inyectiva sólo garantiza que R⁻¹ sea función parcial; para que sea función hace falta R biyectiva."
  },
  {
    topic: "Cap. 1 · Relaciones", ref: "Def. 1.3.10",
    q: "Si R₁ va de A en B y R₂ de B en C, la composición R₂ ∘ R₁ es:",
    options: [
      "{(a, c) : ∃ b, (a, b) ∈ R₁ y (b, c) ∈ R₂}",
      "{(a, c) : ∃ b, (a, b) ∈ R₂ y (b, c) ∈ R₁}",
      "R₁ ∪ R₂",
      "{(a, c) : (a, c) ∈ R₁ ∩ R₂}"
    ],
    answer: 0,
    explain: "Se aplica primero R₁ (de A a B) y luego R₂ (de B a C), pasando por algún b intermedio."
  },
  {
    topic: "Cap. 1 · Relaciones", ref: "Teo. 1.1.11",
    q: "Si |A| = |B| = n (finitos) y f : A → B es inyectiva, entonces f es:",
    options: ["Biyectiva", "No necesariamente sobreyectiva", "Constante", "Necesariamente la identidad"],
    answer: 0,
    explain: "Entre conjuntos finitos del mismo cardinal, inyectiva ⇔ sobreyectiva ⇔ biyectiva."
  },
  {
    topic: "Cap. 1 · Relaciones", ref: "Teo. 1.5.2",
    q: "En una relación de equivalencia, si x ≁ y entonces:",
    options: ["[x] ∩ [y] = ∅", "[x] = [y]", "[x] ⊆ [y]", "[x] ∪ [y] = A"],
    answer: 0,
    explain: "Dos clases de equivalencia o son iguales (x ∼ y) o son disjuntas (x ≁ y)."
  },
  {
    topic: "Cap. 1 · Relaciones", ref: "Teo. 1.5.6",
    q: "Las relaciones de equivalencia en A ≠ ∅ están en correspondencia biunívoca con:",
    options: ["Las particiones de A", "Los órdenes parciales en A", "Los subconjuntos de A", "Las funciones de A en A"],
    answer: 0,
    explain: "Cada equivalencia induce la partición en clases, y cada partición define una equivalencia."
  },
  {
    topic: "Cap. 1 · Relaciones", ref: "Def. 1.2.1",
    q: "En la matriz M(R) de una relación, la entrada Mᵢⱼ vale 1 cuando:",
    options: ["(aᵢ, bⱼ) ∈ R", "i = j", "(bⱼ, aᵢ) ∈ R", "aᵢ = bⱼ"],
    answer: 0,
    explain: "Mᵢⱼ = 1 si aᵢ está relacionado con bⱼ, y 0 si no."
  },

  /* ---------- Capítulo 2: Conjuntos ordenados ---------- */
  {
    topic: "Cap. 2 · Posets", ref: "Teo. 2.2.8",
    q: "Todo poset finito y no vacío tiene:",
    options: ["Al menos un elemento minimal y uno maximal", "Un mínimo", "Un máximo y un mínimo", "Exactamente un elemento maximal"],
    answer: 0,
    explain: "La finitud garantiza minimales y maximales, pero no mínimo ni máximo."
  },
  {
    topic: "Cap. 2 · Posets", ref: "Teo. 2.2.9",
    q: "Si un poset tiene un elemento mínimo, entonces:",
    options: ["Es único", "Puede haber varios", "Coincide con el máximo", "No es un elemento minimal"],
    answer: 0,
    explain: "Si x₀ y x₁ fueran mínimos, x₀ ⪯ x₁ y x₁ ⪯ x₀, y por antisimetría x₀ = x₁."
  },
  {
    topic: "Cap. 2 · Posets", ref: "Def. 2.2.1",
    q: "x₀ es un elemento minimal de (A, ⪯) si:",
    options: ["Para todo x, x ⪯ x₀ ⇒ x = x₀", "x₀ ⪯ x para todo x ∈ A", "x ⪯ x₀ para todo x ∈ A", "x₀ es comparable con todo elemento"],
    answer: 0,
    explain: "Minimal: nada está por debajo de x₀. Mínimo (más fuerte): x₀ está por debajo de todo."
  },
  {
    topic: "Cap. 2 · Posets", ref: "Def. 2.2.13",
    q: "Un poset (A, ⪯) está bien ordenado si:",
    options: ["Todo subconjunto no vacío tiene mínimo", "Todo subconjunto tiene supremo", "Todo par de elementos tiene ínfimo y supremo", "Tiene máximo"],
    answer: 0,
    explain: "Buen orden: cada subconjunto no vacío tiene primer elemento."
  },
  {
    topic: "Cap. 2 · Posets", ref: "Lema 2.2.19",
    q: "Todo conjunto bien ordenado es:",
    options: ["Totalmente ordenado", "Finito", "Un álgebra de Boole", "Acotado superiormente"],
    answer: 0,
    explain: "Para x, y, el conjunto {x, y} tiene mínimo, así que x e y son comparables."
  },
  {
    topic: "Cap. 2 · Posets", ref: "Teo. 2.2.15",
    q: "¿Qué afirma el Principio del Buen Orden en ℕ?",
    options: ["Todo subconjunto no vacío de ℕ tiene mínimo", "Todo subconjunto de ℕ tiene máximo", "Todo subconjunto de ℕ es finito", "ℕ tiene un elemento máximo"],
    answer: 0,
    explain: "(ℕ, ≤) es un conjunto bien ordenado."
  },
  {
    topic: "Cap. 2 · Posets", ref: "Def. 2.3.1",
    q: "El supremo de B ⊆ A es:",
    options: ["El mínimo del conjunto de cotas superiores de B", "El máximo de B", "El máximo del conjunto de cotas superiores de B", "Cualquier cota superior de B"],
    answer: 0,
    explain: "sup B es la menor de las cotas superiores; puede no pertenecer a B."
  },
  {
    topic: "Cap. 2 · Posets", ref: "Lema 2.3.4",
    q: "y₀ = máx B si y sólo si:",
    options: ["y₀ = sup B e y₀ ∈ B", "y₀ es maximal en B", "y₀ es cota superior de B", "y₀ = sup B"],
    answer: 0,
    explain: "El máximo es exactamente un supremo que pertenece al conjunto."
  },
  {
    topic: "Cap. 2 · Posets", ref: "Def. 2.1.6",
    q: "Al construir el diagrama de Hasse a partir del grafo de ⪯ se eliminan:",
    options: ["Los lazos y las aristas que se deducen por transitividad", "Sólo los lazos", "Los elementos minimales", "Todas las aristas entre elementos comparables"],
    answer: 0,
    explain: "Se sobreentienden la reflexividad y la transitividad, y se dibuja de abajo hacia arriba."
  },
  {
    topic: "Cap. 2 · Posets", ref: "Lema 2.2.7",
    q: "Por el principio de dualidad, un mínimo de (A, ⪯) es en (A, ⪰):",
    options: ["Un máximo", "Un mínimo", "Un elemento minimal", "Un ínfimo de ∅"],
    answer: 0,
    explain: "Al invertir el orden, mínimos ↔ máximos y minimales ↔ maximales."
  },
  {
    topic: "Cap. 2 · Posets", ref: "Teo. 2.4.6",
    q: "Un morfismo de posets f : A → B es un isomorfismo si y sólo si:",
    options: [
      "f es sobreyectiva y x ⪯ y ⇔ f(x) ⪯ f(y)",
      "f es biyectiva y x ⪯ y ⇒ f(x) ⪯ f(y)",
      "f es inyectiva",
      "f lleva el mínimo de A en el mínimo de B"
    ],
    answer: 0,
    explain: "Un morfismo biyectivo no alcanza: hace falta que f⁻¹ también preserve el orden (el ⇔)."
  },
  {
    topic: "Cap. 2 · Posets", ref: "Def. 2.1.2",
    q: "Un orden ⪯ en A es total si:",
    options: ["Todo par de elementos de A es comparable", "A tiene máximo y mínimo", "⪯ es simétrica", "A es finito"],
    answer: 0,
    explain: "Orden total: para todo x, y, se cumple x ⪯ y o y ⪯ x."
  },

  /* ---------- Capítulo 3: Retículos ---------- */
  {
    topic: "Cap. 3 · Retículos", ref: "Def. 3.1.1",
    q: "Un poset (L, ⪯) es un retículo si:",
    options: ["Todo par {x, y} tiene ínfimo y supremo", "Todo subconjunto no vacío tiene mínimo", "Tiene máximo y mínimo", "Todo par de elementos es comparable"],
    answer: 0,
    explain: "Retículo: existen ínf{x, y} = x ∧ y y sup{x, y} = x ∨ y para todo par."
  },
  {
    topic: "Cap. 3 · Retículos", ref: "Ej. 3.1.7",
    q: "En el retículo (Dₙ, |) de divisores de n, x ∨ y es:",
    options: ["mcm(x, y)", "mcd(x, y)", "x · y", "máx(x, y)"],
    answer: 0,
    explain: "El join es el supremo para \"divide a\": el mínimo común múltiplo. El meet es el mcd."
  },
  {
    topic: "Cap. 3 · Retículos", ref: "Def. 3.2.1",
    q: "En el retículo (P(X), ⊆), el join A ∨ B es:",
    options: ["A ∪ B", "A ∩ B", "A − B", "X"],
    answer: 0,
    explain: "La menor cota superior de A y B respecto de ⊆ es A ∪ B; el meet es A ∩ B."
  },
  {
    topic: "Cap. 3 · Retículos", ref: "Teo. 3.2.4",
    q: "Por la propiedad de absorción, x ∨ (x ∧ y) es igual a:",
    options: ["x", "y", "x ∧ y", "x ∨ y"],
    answer: 0,
    explain: "x ∨ (x ∧ y) = x = x ∧ (x ∨ y)."
  },
  {
    topic: "Cap. 3 · Retículos", ref: "Teo. 3.2.4",
    q: "En un retículo, x ⪯ y es equivalente a:",
    options: ["x ∧ y = x", "x ∨ y = x", "x ∧ y = y", "x ∨ y = x ∧ y"],
    answer: 0,
    explain: "x ⪯ y ⇔ x = x ∧ y ⇔ y = x ∨ y."
  },
  {
    topic: "Cap. 3 · Retículos", ref: "Def. 3.3.4",
    q: "L′ ⊆ L es un subretículo de L si:",
    options: ["x ∨ y ∈ L′ y x ∧ y ∈ L′ para todo x, y ∈ L′", "L′ contiene al máximo y al mínimo de L", "L′ es totalmente ordenado", "L′ es un retículo con algún orden"],
    answer: 0,
    explain: "Un subretículo debe ser cerrado por el join y el meet de L."
  },
  {
    topic: "Cap. 3 · Retículos", ref: "Lema 3.3.6",
    q: "Si L′ y L″ son subretículos de L, siempre es un subretículo de L:",
    options: ["L′ ∩ L″", "L′ ∪ L″", "L − L′", "El complemento de L″"],
    answer: 0,
    explain: "La intersección de subretículos es subretículo; la unión en general no."
  },
  {
    topic: "Cap. 3 · Retículos", ref: "Lema 3.4.3",
    q: "f : L → L′ es un morfismo de retículos si y sólo si:",
    options: [
      "f(x ∨ y) = f(x) ∨ f(y) y f(x ∧ y) = f(x) ∧ f(y)",
      "f preserva el orden",
      "f es biyectiva",
      "f(x ∨ y) = f(x) ∧ f(y)"
    ],
    answer: 0,
    explain: "Preservar join y meet basta; un morfismo de posets entre retículos no necesariamente lo es."
  },
  {
    topic: "Cap. 3 · Retículos", ref: "Def. 3.4.14",
    q: "Un retículo isomorfo a su retículo dual se denomina:",
    options: ["Autodual", "Distributivo", "Complementado", "Acotado"],
    answer: 0,
    explain: "L es autodual si existe un anti-isomorfismo de L en L; por ejemplo, todos los (Dₙ, |)."
  },
  {
    topic: "Cap. 3 · Retículos", ref: "Teo. 3.4.9",
    q: "Si L es un retículo y f : L → P es un isomorfismo de posets, entonces:",
    options: ["P es un retículo y f es un isomorfismo de retículos", "P puede no ser un retículo", "f no preserva ∨", "P es distributivo"],
    answer: 0,
    explain: "Los isomorfismos de orden preservan ínfimos y supremos, y con ellos la estructura de retículo."
  },

  /* ---------- Capítulo 4: Retículos especiales - Álgebras de Boole ---------- */
  {
    topic: "Cap. 4 · Retículos especiales", ref: "Def. 4.1.1",
    q: "Un retículo es acotado si:",
    options: ["Tiene máximo y mínimo", "Es finito", "Todo elemento tiene complemento", "Todo par es comparable"],
    answer: 0,
    explain: "Acotado: existen ⊤ (1, máximo) y ⊥ (0, mínimo)."
  },
  {
    topic: "Cap. 4 · Retículos especiales", ref: "Def. 4.1.7",
    q: "En un retículo acotado, b es complemento de a si:",
    options: ["a ∨ b = ⊤ y a ∧ b = ⊥", "a ∨ b = ⊥ y a ∧ b = ⊤", "a ⪯ b", "a ∧ b = a"],
    answer: 0,
    explain: "El complemento \"completa\" a hasta el máximo y no comparte nada salvo el mínimo."
  },
  {
    topic: "Cap. 4 · Retículos especiales", ref: "Teo. 4.2.14",
    q: "En un retículo distributivo y acotado, cada elemento tiene:",
    options: ["A lo sumo un complemento", "Exactamente un complemento", "Al menos dos complementos", "Ningún complemento"],
    answer: 0,
    explain: "La distributividad da unicidad, pero no existencia: puede no haber complemento."
  },
  {
    topic: "Cap. 4 · Retículos especiales", ref: "Teo. 4.2.7",
    q: "Si un retículo satisface x ∨ (y ∧ z) = (x ∨ y) ∧ (x ∨ z) para todo x, y, z:",
    options: ["También satisface la otra ley distributiva", "No necesariamente satisface la otra", "Es un álgebra de Boole", "Es totalmente ordenado"],
    answer: 0,
    explain: "Cada ley distributiva implica la otra, así que basta verificar una."
  },
  {
    topic: "Cap. 4 · Retículos especiales", ref: "Teo. 4.2.18",
    q: "Teorema M₃–N₅: un retículo L es distributivo si y sólo si:",
    options: ["No contiene subretículos isomorfos a M₃ ni a N₅", "Contiene a M₃ o a N₅", "Es isomorfo a M₃ × N₅", "Tiene a lo sumo 5 elementos"],
    answer: 0,
    explain: "M₃ y N₅ son los dos \"obstáculos\" mínimos a la distributividad."
  },
  {
    topic: "Cap. 4 · Álgebras de Boole", ref: "Def. 4.3.1",
    q: "Un álgebra de Boole es un retículo:",
    options: ["Complementado y distributivo", "Acotado y totalmente ordenado", "Distributivo (sin más condiciones)", "Complementado (sin más condiciones)"],
    answer: 0,
    explain: "Boole = complementado + distributivo; por eso el complemento es único."
  },
  {
    topic: "Cap. 4 · Álgebras de Boole", ref: "Teo. 4.3.8",
    q: "Por las leyes de De Morgan, (x ∨ y)ᶜ es igual a:",
    options: ["xᶜ ∧ yᶜ", "xᶜ ∨ yᶜ", "x ∧ y", "(x ∧ y)ᶜ"],
    answer: 0,
    explain: "(x ∨ y)ᶜ = xᶜ ∧ yᶜ y (x ∧ y)ᶜ = xᶜ ∨ yᶜ."
  },
  {
    topic: "Cap. 4 · Álgebras de Boole", ref: "Teo. 4.3.8",
    q: "En un álgebra de Boole, 0ᶜ es:",
    options: ["1", "0", "No existe", "Depende del álgebra"],
    answer: 0,
    explain: "0ᶜ = 1 y 1ᶜ = 0; además (xᶜ)ᶜ = x."
  },
  {
    topic: "Cap. 4 · Álgebras de Boole", ref: "Lema 4.3.9",
    q: "En un álgebra de Boole, a ⪯ b es equivalente a:",
    options: ["a ∧ bᶜ = 0", "a ∨ bᶜ = 1", "a ∧ b = 0", "aᶜ ∧ b = 0"],
    answer: 0,
    explain: "a ⪯ b ⇔ a ∧ bᶜ = 0 ⇔ aᶜ ∨ b = 1."
  },
  {
    topic: "Cap. 4 · Álgebras de Boole", ref: "Def. 4.3.23",
    q: "Un átomo de un álgebra de Boole es un elemento a tal que:",
    options: ["a ≠ 0 y x ⪯ a ⇒ x = 0 o x = a", "a es el máximo", "a = aᶜ", "a ⪯ x para todo x"],
    answer: 0,
    explain: "Los átomos son los elementos que cubren inmediatamente al 0."
  },
  {
    topic: "Cap. 4 · Álgebras de Boole", ref: "Cor. 4.3.31",
    q: "Un álgebra de Boole finita con n átomos tiene cardinal:",
    options: ["2ⁿ", "n", "n²", "2n"],
    answer: 0,
    explain: "Es isomorfa a P(X) con X el conjunto de átomos, que tiene 2ⁿ elementos."
  },
  {
    topic: "Cap. 4 · Álgebras de Boole", ref: "Teo. 4.3.30",
    q: "Toda álgebra de Boole finita es isomorfa a:",
    options: ["(P(X), ⊆), donde X es su conjunto de átomos", "(Dₙ, |) para cualquier n", "({0, 1}, ≤)", "N₅"],
    answer: 0,
    explain: "Cada elemento ≠ 0 se escribe de forma única como supremo de átomos."
  },
  {
    topic: "Cap. 4 · Álgebras de Boole", ref: "Cor. 4.3.31",
    q: "¿Existe un álgebra de Boole con exactamente 6 elementos?",
    options: ["No: las finitas tienen 2ⁿ elementos", "Sí, (D₁₂, |)", "Sí, cualquier retículo de 6 elementos", "Sólo si es totalmente ordenada"],
    answer: 0,
    explain: "6 no es potencia de 2. (D₁₂, |) tiene 6 elementos pero 2 y 6 no tienen complemento."
  },
  {
    topic: "Cap. 4 · Álgebras de Boole", ref: "Cor. 4.3.32",
    q: "Dos álgebras de Boole finitas son isomorfas si y sólo si:",
    options: ["Tienen el mismo cardinal", "Tienen el mismo máximo", "Son subálgebras de P(ℕ)", "Son distributivas"],
    answer: 0,
    explain: "Ambas son isomorfas a 2ⁿ, con 2ⁿ su cardinal."
  },

  /* ---------- Capítulo 5: Operaciones en un conjunto ---------- */
  {
    topic: "Cap. 5 · Operaciones", ref: "Lema 5.1.14",
    q: "Si una operación ∗ admite un elemento neutro, éste:",
    options: ["Es único", "Puede no ser único", "Es absorbente", "Sólo es neutro a derecha"],
    answer: 0,
    explain: "Si e y e′ son neutros, e = e ∗ e′ = e′."
  },
  {
    topic: "Cap. 5 · Operaciones", ref: "Lema 5.1.18",
    q: "Si ∗ es asociativa con neutro y x, y tienen inverso, (x ∗ y)⁻¹ es:",
    options: ["y⁻¹ ∗ x⁻¹", "x⁻¹ ∗ y⁻¹", "x ∗ y", "y ∗ x"],
    answer: 0,
    explain: "Se invierte el orden: (x ∗ y) ∗ (y⁻¹ ∗ x⁻¹) = e."
  },
  {
    topic: "Cap. 5 · Operaciones", ref: "Lema 5.2.6",
    q: "¿Cuál de estas propiedades es siempre hereditaria a un subconjunto cerrado Y ⊆ X?",
    options: ["La asociatividad", "La existencia de neutro", "La existencia de inversos", "Ser un grupo"],
    answer: 0,
    explain: "Asociatividad y conmutatividad se heredan; el neutro sólo si pertenece a Y."
  },
  {
    topic: "Cap. 5 · Operaciones", ref: "Def. 5.3.5",
    q: "La operación ∗ se induce al cociente X/∼ si:",
    options: ["x ∼ x′ e y ∼ y′ ⇒ x ∗ y ∼ x′ ∗ y′", "∗ es conmutativa", "∼ es un orden", "x ∗ y ∼ y ∗ x para todo x, y"],
    answer: 0,
    explain: "Así [x] ∗ [y] := [x ∗ y] no depende de los representantes elegidos."
  },
  {
    topic: "Cap. 5 · Operaciones", ref: "Def. 5.1.7",
    q: "Un elemento a es absorbente para ∗ si para todo x ∈ X:",
    options: ["x ∗ a = a y a ∗ x = a", "x ∗ a = x y a ∗ x = x", "a ∗ a = a", "Existe a⁻¹ con a ∗ a⁻¹ = x"],
    answer: 0,
    explain: "Absorbente: operar con a siempre da a (como el 0 en el producto de enteros)."
  },
  {
    topic: "Cap. 5 · Operaciones", ref: "Def. 5.1.7",
    q: "Un elemento a ∈ X es idempotente para ∗ si:",
    options: ["a ∗ a = a", "a ∗ a = e", "a ∗ x = x para todo x", "a = a⁻¹"],
    answer: 0,
    explain: "Idempotente: operarlo consigo mismo lo deja igual, como x ∨ x = x en un retículo."
  },
  {
    topic: "Cap. 5 · Operaciones", ref: "Lema 5.1.15",
    q: "Si ∗ es asociativa y tiene neutro, un elemento con inverso tiene:",
    options: ["Un único inverso", "Al menos dos inversos", "Como inverso al neutro", "Inverso sólo a derecha"],
    answer: 0,
    explain: "Si y, y′ son inversos de x: y = y ∗ (x ∗ y′) = (y ∗ x) ∗ y′ = y′. Se usa la asociatividad."
  },
  {
    topic: "Cap. 5 · Operaciones", ref: "Def. 5.3.1",
    q: "La operación producto en X × Y se define como (x, y) ∗ (x′, y′) =",
    options: ["(x ∗ₓ x′, y ∗ᵧ y′)", "(x ∗ₓ y, x′ ∗ᵧ y′)", "(x ∗ₓ y′, x′ ∗ᵧ y)", "x ∗ₓ x′"],
    answer: 0,
    explain: "Se opera coordenada a coordenada; hereda asociatividad, conmutatividad, neutro e inversos."
  },
  {
    topic: "Cap. 5 · Operaciones", ref: "Teo. 5.3.8",
    q: "Si ∗ se induce al cociente X/∼ y e es neutro en X, el neutro de X/∼ es:",
    options: ["[e]", "X", "∅", "No necesariamente existe"],
    answer: 0,
    explain: "[e] ∗ [x] = [e ∗ x] = [x]; también se heredan asociatividad e inversos."
  },

  /* ---------- Capítulo 6: Estructuras algebraicas ---------- */
  {
    topic: "Cap. 6 · Estructuras algebraicas", ref: "Def. 6.1.1",
    q: "Un monoide es:",
    options: ["Un semigrupo con elemento neutro", "Un grupo conmutativo", "Un conjunto con una operación conmutativa", "Un semigrupo sin neutro"],
    answer: 0,
    explain: "Semigrupo (asociativa) → monoide (+ neutro) → grupo (+ inversos)."
  },
  {
    topic: "Cap. 6 · Estructuras algebraicas", ref: "Def. 6.1.1",
    q: "Un grupo abeliano es:",
    options: ["Un grupo conmutativo", "Un grupo finito", "Un grupo cíclico", "Un monoide sin inversos"],
    answer: 0,
    explain: "Abeliano = la operación del grupo es conmutativa."
  },
  {
    topic: "Cap. 6 · Estructuras algebraicas", ref: "Teo. 6.3.18",
    q: "H ⊆ G (no vacío) es subgrupo de G si y sólo si para todo a, b ∈ H:",
    options: ["ab⁻¹ ∈ H", "ab ∈ H", "ab = ba", "a² ∈ H"],
    answer: 0,
    explain: "Esta única condición da neutro, inversos y clausura."
  },
  {
    topic: "Cap. 6 · Estructuras algebraicas", ref: "Lema 6.4.8",
    q: "¿Cuáles son los generadores de (ℤ, +)?",
    options: ["1 y −1", "Sólo 1", "Todos los primos", "0 y 1"],
    answer: 0,
    explain: "ℤ = ⟨1⟩ = ⟨−1⟩, y ningún otro entero genera ℤ."
  },
  {
    topic: "Cap. 6 · Estructuras algebraicas", ref: "Lema 6.4.8",
    q: "a es generador de (ℤₘ, +) si y sólo si:",
    options: ["mcd(a, m) = 1", "a divide a m", "a es primo", "a = 1"],
    answer: 0,
    explain: "Los generadores de ℤₘ son las clases coprimas con m."
  },
  {
    topic: "Cap. 6 · Estructuras algebraicas", ref: "Lema 6.4.8",
    q: "¿Cuántos generadores tiene (ℤ₁₂, +)?",
    options: ["4", "2", "6", "11"],
    answer: 0,
    explain: "Los coprimos con 12 en {0, …, 11} son 1, 5, 7 y 11."
  },
  {
    topic: "Cap. 6 · Estructuras algebraicas", ref: "Teo. 6.4.9",
    q: "Los subgrupos de (ℤ, +) son:",
    options: ["Los de la forma ⟨m⟩ = mℤ", "Sólo {0} y ℤ", "Los subconjuntos finitos de ℤ", "Los conjuntos de primos"],
    answer: 0,
    explain: "Todo subgrupo de ℤ es cíclico; si H ≠ {0}, m = mín(H ∩ ℕ)."
  },
  {
    topic: "Cap. 6 · Estructuras algebraicas", ref: "Teo. 6.5.24",
    q: "Un homomorfismo de grupos f es un monomorfismo si y sólo si:",
    options: ["ker(f) = {e}", "ker(f) = G", "f es sobreyectiva", "Im(f) = {e}"],
    answer: 0,
    explain: "f(x) = f(y) ⇔ xy⁻¹ ∈ ker(f), así que núcleo trivial ⇔ inyectiva."
  },
  {
    topic: "Cap. 6 · Estructuras algebraicas", ref: "Teo. 6.5.7",
    q: "Entre grupos, para que f sea homomorfismo de grupos alcanza con que:",
    options: ["f(xy) = f(x)f(y) para todo x, y", "f(e) = e", "f(x⁻¹) = f(x)⁻¹", "f sea biyectiva"],
    answer: 0,
    explain: "Preservar el producto implica preservar el neutro y los inversos."
  },

  /* ---------- Capítulo 7: Grupos ---------- */
  {
    topic: "Cap. 7 · Grupos", ref: "Cor. 7.1.11",
    q: "Si G tiene orden 12, ¿cuál NO puede ser el orden de un subgrupo?",
    options: ["5", "4", "6", "3"],
    answer: 0,
    explain: "Por Lagrange, o(H) divide a o(G) = 12, y 5 no divide a 12."
  },
  {
    topic: "Cap. 7 · Grupos", ref: "Teo. 7.1.10",
    q: "El Teorema de Lagrange afirma que o(G) es igual a:",
    options: ["[G : H] · o(H)", "o(H) + [G : H]", "o(H)²", "[G : H] / o(H)"],
    answer: 0,
    explain: "Las coclases de H particionan G y todas tienen o(H) elementos."
  },
  {
    topic: "Cap. 7 · Grupos", ref: "Def. 7.1.9",
    q: "El índice [G : H] es:",
    options: ["La cantidad de coclases distintas módulo H", "El orden de H", "El menor k con aᵏ = e", "La cantidad de generadores de G"],
    answer: 0,
    explain: "Hay tantas coclases a izquierda como a derecha (Teo. 7.1.8)."
  },
  {
    topic: "Cap. 7 · Grupos", ref: "Lema 7.1.2",
    q: "La coclase a izquierda de a módulo H es:",
    options: ["aH = {ah : h ∈ H}", "Ha = {ha : h ∈ H}", "aHa⁻¹", "{a}"],
    answer: 0,
    explain: "[a]ₗ = aH (congruencia a⁻¹b ∈ H); [a]ᵣ = Ha (ab⁻¹ ∈ H)."
  },
  {
    topic: "Cap. 7 · Grupos", ref: "Cor. 7.4.6",
    q: "Si G es un grupo de orden p, con p primo, entonces:",
    options: ["G ≃ ℤₚ", "G no es cíclico", "G no es abeliano", "G tiene p subgrupos"],
    answer: 0,
    explain: "Por Lagrange todo a ≠ e tiene orden p, así que G es cíclico de orden p."
  },
  {
    topic: "Cap. 7 · Grupos", ref: "Lema 7.2.4",
    q: "N es un subgrupo normal de G si y sólo si:",
    options: ["aN = Na para todo a ∈ G", "N es abeliano", "N es cíclico", "[G : N] = 2"],
    answer: 0,
    explain: "Normal: las congruencias a izquierda y a derecha módulo N coinciden."
  },
  {
    topic: "Cap. 7 · Grupos", ref: "Lema 7.2.3",
    q: "En un grupo abeliano:",
    options: ["Todo subgrupo es normal", "Ningún subgrupo propio es normal", "Sólo {e} es normal", "Sólo los subgrupos cíclicos son normales"],
    answer: 0,
    explain: "Si G conmuta, aN = Na para todo a."
  },
  {
    topic: "Cap. 7 · Grupos", ref: "Lema 7.3.1",
    q: "Si f : G → H es un homomorfismo de grupos, ker(f) es:",
    options: ["Un subgrupo normal de G", "Un subgrupo de H", "Siempre {e}", "Un subconjunto que no es subgrupo"],
    answer: 0,
    explain: "Además, todo subgrupo normal es núcleo de algún homomorfismo (Teo. 7.3.4)."
  },
  {
    topic: "Cap. 7 · Grupos", ref: "Cor. 7.3.8",
    q: "Primer Teorema de Isomorfismo: si f : G → H es homomorfismo, G / ker(f) ≃",
    options: ["Im(f)", "H", "ker(f)", "G"],
    answer: 0,
    explain: "Si además f es epimorfismo, Im(f) = H y G / ker(f) ≃ H."
  },
  {
    topic: "Cap. 7 · Grupos", ref: "Teo. 7.4.3",
    q: "Un grupo cíclico infinito es isomorfo a:",
    options: ["(ℤ, +)", "(ℤₘ, +) para algún m", "(ℚ, +)", "(ℝ, +)"],
    answer: 0,
    explain: "Los cíclicos son ℤ (orden infinito) o ℤₘ (orden m)."
  },
  {
    topic: "Cap. 7 · Grupos", ref: "Cor. 7.4.5",
    q: "Todo subgrupo de un grupo cíclico es:",
    options: ["Cíclico", "Trivial", "De índice 2", "No abeliano"],
    answer: 0,
    explain: "Se deduce de la clasificación de cíclicos y de los subgrupos de ℤ."
  },
  {
    topic: "Cap. 7 · Grupos", ref: "Teo. 7.4.8",
    q: "Si a tiene orden finito, o(a) es:",
    options: ["mín{k ∈ ℕ : aᵏ = e}", "máx{k ∈ ℕ : aᵏ = e}", "o(G) siempre", "La cantidad de inversos de a"],
    answer: 0,
    explain: "Y ⟨a⟩ = {e, a, a², …, a^(o(a)−1)}."
  },

  /* ---------- Capítulo 8: Categorías y funtores ---------- */
  {
    topic: "Cap. 8 · Categorías", ref: "Def. 8.2.3",
    q: "Una categoría C es pequeña si:",
    options: ["ob C y mor C son conjuntos", "Tiene finitos objetos", "Cada Hom(A, B) tiene un solo elemento", "No tiene morfismos identidad"],
    answer: 0,
    explain: "Si sólo cada Hom(A, B) es un conjunto, C es localmente pequeña."
  },
  {
    topic: "Cap. 8 · Funtores", ref: "Def. 8.3.12",
    q: "Un funtor contravariante F verifica F(g ∘ f) =",
    options: ["F(f) ∘ F(g)", "F(g) ∘ F(f)", "F(g ∘ f)⁻¹", "id_F(A)"],
    answer: 0,
    explain: "El contravariante invierte las flechas; el covariante da F(g) ∘ F(f)."
  },
  {
    topic: "Cap. 8 · Categorías", ref: "Def. 8.4.1",
    q: "f : A → B es un morfismo mónico si:",
    options: ["f ∘ g = f ∘ h ⇒ g = h", "g ∘ f = h ∘ f ⇒ g = h", "Existe f′ con f′ ∘ f = id_A", "f es una función inyectiva"],
    answer: 0,
    explain: "Mónico = cancelable a izquierda. En Set coincide con inyectiva, pero no en toda categoría."
  },
  {
    topic: "Cap. 8 · Categorías", ref: "Teo. 8.4.17",
    q: "En Set, los morfismos épicos son exactamente:",
    options: ["Las funciones sobreyectivas", "Las funciones inyectivas", "Las biyecciones", "Las funciones constantes"],
    answer: 0,
    explain: "Épico generaliza sobreyectiva; en Set coinciden."
  },
  {
    topic: "Cap. 8 · Categorías", ref: "Lema 8.4.30",
    q: "¿Qué es cierto en cualquier categoría?",
    options: ["Todo isomorfismo es mónico y épico", "Todo morfismo mónico y épico es isomorfismo", "Todo mónico es una función inyectiva", "Todo épico tiene inverso"],
    answer: 0,
    explain: "La recíproca falla: hay morfismos mónicos y épicos que no son isomorfismos."
  },
  {
    topic: "Cap. 8 · Funtores", ref: "Def. 8.4.4",
    q: "Un funtor F es fiel si:",
    options: ["Hom(A, B) → Hom(F(A), F(B)) es inyectiva", "Hom(A, B) → Hom(F(A), F(B)) es sobreyectiva", "F es biyectivo en objetos", "F preserva productos"],
    answer: 0,
    explain: "Si existe un funtor fiel C → Set, C se dice concreta. Sobreyectiva en Hom = full."
  },
  {
    topic: "Cap. 8 · Categorías", ref: "Def. 8.2.17",
    q: "Una subcategoría C′ de C es full si para todo A, B ∈ ob C′:",
    options: ["Hom_C′(A, B) = Hom_C(A, B)", "ob C′ = ob C", "Hom_C′(A, B) tiene un solo elemento", "C′ no tiene identidades"],
    answer: 0,
    explain: "Full: C′ conserva todos los morfismos de C entre sus objetos."
  },
  {
    topic: "Cap. 8 · Categorías", ref: "Def. 8.4.24",
    q: "f : A → B es un isomorfismo en una categoría si:",
    options: ["Existe f′ : B → A con f′ ∘ f = id_A y f ∘ f′ = id_B", "f es mónico y épico", "f es una función biyectiva", "A = B"],
    answer: 0,
    explain: "Isomorfismo = tiene inverso bilátero (que es único). Mónico + épico no alcanza en general."
  },
  {
    topic: "Cap. 8 · Categorías", ref: "Def. 8.2.14",
    q: "Un diagrama en una categoría es conmutativo si:",
    options: ["Todos los caminos entre dos vértices dan la misma flecha", "Todas sus flechas son isomorfismos", "Tiene un único vértice", "Sus flechas se pueden invertir"],
    answer: 0,
    explain: "Componer por cualquier camino entre X e Y produce el mismo morfismo."
  },

  /* ---------- Capítulo 9: Construcciones en categorías ---------- */
  {
    topic: "Cap. 9 · Construcciones", ref: "Def. 9.1.1",
    q: "Un objeto 0 es inicial si:",
    options: ["Para cada A existe un único morfismo 0 → A", "Para cada A existe un único morfismo A → 0", "No tiene morfismos salientes", "Es isomorfo a todo objeto"],
    answer: 0,
    explain: "Terminal es el dual (único A → 1); nulo = inicial y terminal."
  },
  {
    topic: "Cap. 9 · Construcciones", ref: "Teo. 9.1.8",
    q: "Si 1 y 1′ son objetos terminales de C, entonces:",
    options: ["Son isomorfos", "Son iguales", "No existe morfismo entre ellos", "C no tiene objeto inicial"],
    answer: 0,
    explain: "Los objetos definidos por propiedades universales son únicos salvo isomorfismo."
  },
  {
    topic: "Cap. 9 · Construcciones", ref: "Def. 9.2.1",
    q: "En el producto (A × B, π_A, π_B), dados f : C → A y g : C → B, el único ⟨f, g⟩ cumple:",
    options: ["π_A ∘ ⟨f, g⟩ = f y π_B ∘ ⟨f, g⟩ = g", "⟨f, g⟩ ∘ π_A = f", "f ∘ π_A = g ∘ π_B", "⟨f, g⟩ = f × g siempre"],
    answer: 0,
    explain: "Es la propiedad universal del producto: el diagrama conmuta."
  },
  {
    topic: "Cap. 9 · Construcciones", ref: "Teo. 9.2.12",
    q: "El coproducto de A y B en C es:",
    options: ["El producto de A y B en C^op", "El producto de A y B en C", "Siempre la unión disjunta", "El ecualizador de A y B"],
    answer: 0,
    explain: "Los conceptos duales en C son los mismos conceptos en la categoría opuesta."
  },
  {
    topic: "Cap. 9 · Construcciones", ref: "Lema 9.3.11",
    q: "Si (X, e) es un ecualizador de f, g : A → B, entonces e es:",
    options: ["Mónico", "Épico", "Siempre un isomorfismo", "Igual a f"],
    answer: 0,
    explain: "Dualmente, la flecha de un coecualizador es épica."
  },
  {
    topic: "Cap. 9 · Construcciones", ref: "Def. 9.5.5",
    q: "Una categoría cartesiana cerrada (CCC) es una categoría con:",
    options: ["Objeto terminal, productos y exponenciales", "Sólo coproductos", "Objeto inicial y ecualizadores", "Un solo objeto"],
    answer: 0,
    explain: "Los exponenciales Bᴬ requieren productos; con objeto terminal se obtiene una CCC."
  },
  {
    topic: "Cap. 9 · Construcciones", ref: "Def. 9.5.1",
    q: "Si g : C × A → B, el morfismo curry(g) es de la forma:",
    options: ["C → Bᴬ", "Bᴬ → C", "C × A → Bᴬ", "A → B"],
    answer: 0,
    explain: "curry(g) es el único g̃ : C → Bᴬ con eval ∘ (g̃ × id_A) = g."
  },
  {
    topic: "Cap. 9 · Construcciones", ref: "Def. 9.1.1",
    q: "Un objeto nulo (u objeto cero) es un objeto que es:",
    options: ["Inicial y terminal", "Inicial pero no terminal", "Isomorfo a todo objeto", "Sin morfismos"],
    answer: 0,
    explain: "Nulo = a la vez inicial (único 0 → A) y terminal (único A → 0)."
  },
  {
    topic: "Cap. 9 · Construcciones", ref: "Def. 9.3.1",
    q: "El ecualizador de f, g : A → B es un par (X, e) con e : X → A tal que:",
    options: ["f ∘ e = g ∘ e, y es universal con esa propiedad", "e ∘ f = e ∘ g", "f = g", "e es un isomorfismo"],
    answer: 0,
    explain: "Toda e′ con f ∘ e′ = g ∘ e′ se factoriza de forma única por e. En Set, X = {a : f(a) = g(a)}."
  },

  /* ---------- Capítulo 10: Equivalencias, adjunciones y mónadas ---------- */
  {
    topic: "Cap. 10 · Equivalencias y adjunciones", ref: "Def. 10.1.1",
    q: "η : F → G es una transformación natural si para todo f : A → B:",
    options: ["η_B ∘ F(f) = G(f) ∘ η_A", "η_A ∘ F(f) = G(f) ∘ η_B", "F(f) = G(f)", "η_B = η_A"],
    answer: 0,
    explain: "Es la condición de naturalidad: el cuadrado conmuta."
  },
  {
    topic: "Cap. 10 · Equivalencias y adjunciones", ref: "Teo. 10.2.14",
    q: "Un funtor F define una equivalencia de categorías si y sólo si F es:",
    options: ["Fiel, full y esencialmente sobreyectivo en objetos", "Biyectivo en objetos y morfismos", "Sólo fiel", "Contravariante"],
    answer: 0,
    explain: "Las equivalencias identifican categorías salvo objetos isomorfos."
  },
  {
    topic: "Cap. 10 · Equivalencias y adjunciones", ref: "Teo. 10.2.11",
    q: "C y D son categorías equivalentes si y sólo si sus esqueletos son:",
    options: ["Categorías isomorfas", "Categorías pequeñas", "Iguales a C y D", "Categorías discretas"],
    answer: 0,
    explain: "Un esqueleto toma un representante de cada clase de isomorfismo."
  },
  {
    topic: "Cap. 10 · Equivalencias y adjunciones", ref: "Cor. 10.3.10",
    q: "Si F tiene un adjunto a derecha G, entonces G preserva:",
    options: ["Productos y ecualizadores", "Coproductos y coecualizadores", "Objetos iniciales", "Ninguna construcción"],
    answer: 0,
    explain: "Los adjuntos a derecha preservan límites; los adjuntos a izquierda, colímites."
  },
  {
    topic: "Cap. 10 · Mónadas", ref: "Def. 10.4.1",
    q: "Una mónada sobre C consiste en un endofuntor T : C → C junto con:",
    options: ["η : id → T y μ : T² → T", "Un objeto terminal", "Un funtor contravariante", "Un esqueleto de C"],
    answer: 0,
    explain: "η es la unidad y μ la multiplicación, con leyes de asociatividad y unidad."
  },
  {
    topic: "Cap. 10 · Lema de Yoneda", ref: "Lema 10.5.1",
    q: "Lema de Yoneda: si F : C → Set, Nat(hom_A, F) está en biyección con:",
    options: ["F(A)", "Hom(A, A)", "ob C", "F(F(A))"],
    answer: 0,
    explain: "Las transformaciones naturales hom_A → F corresponden a los elementos de F(A)."
  },
  {
    topic: "Cap. 10 · Equivalencias y adjunciones", ref: "Def. 10.1.1",
    q: "Una transformación natural η : F → G es un isomorfismo natural si:",
    options: ["Cada η_A es un isomorfismo", "F = G", "Cada η_A es la identidad", "Algún η_A es un isomorfismo"],
    answer: 0,
    explain: "Si existe, F y G se dicen naturalmente isomorfos (F ≃ G)."
  },
  {
    topic: "Cap. 10 · Equivalencias y adjunciones", ref: "Def. 10.3.1",
    q: "En una adjunción F ⊣ G (F : C → D, G : D → C), la unidad es una transformación natural:",
    options: ["η : Id_C → G ∘ F", "η : F ∘ G → Id_D", "η : G → F", "η : Id_D → G ∘ F"],
    answer: 0,
    explain: "La unidad va de Id_C a G ∘ F; la counidad ε va de F ∘ G a Id_D."
  },
  {
    topic: "Cap. 10 · Equivalencias y adjunciones", ref: "Def. 10.2.7",
    q: "Un esqueleto de C es una subcategoría full E tal que:",
    options: ["Cada objeto de C es isomorfo a un único objeto de E", "E tiene un solo objeto", "E contiene todos los objetos de C", "E no tiene isomorfismos"],
    answer: 0,
    explain: "Toda categoría tiene un esqueleto, y C es equivalente a él (Teo. 10.2.10)."
  },

  /* =====================================================================
   * Ampliación: preguntas a partir de ejemplos, observaciones y ejercicios.
   * `answer: [i, j, ...]` = selección múltiple (marcar todas las correctas).
   * ===================================================================== */

  /* ---------- Cap. 1 (ampliación) ---------- */
  {
    topic: "Cap. 1 · Relaciones", ref: "Ej. 1.4.3",
    q: "¿Qué propiedades tiene la relación vacía R₀ = ∅ en un conjunto A ≠ ∅?",
    options: ["Simétrica", "Transitiva", "Antisimétrica", "Reflexiva"],
    answer: [0, 1, 2],
    explain: "Las implicaciones valen por vacuidad (antecedente falso), pero no es reflexiva: no contiene ningún (a, a)."
  },
  {
    topic: "Cap. 1 · Relaciones", ref: "Ej. 1.4.3",
    q: "Si A tiene al menos 2 elementos, la relación trivial R₁ = A × A es:",
    options: ["Reflexiva", "Simétrica", "Transitiva", "Antisimétrica"],
    answer: [0, 1, 2],
    explain: "Todo está relacionado con todo; por eso falla la antisimetría (a R b y b R a con a ≠ b)."
  },
  {
    topic: "Cap. 1 · Relaciones", ref: "Obs. 1.4.5",
    q: "Una relación R en A es simétrica y antisimétrica a la vez si y sólo si:",
    options: ["R ⊆ ∆", "R = A × A", "R es reflexiva", "R = ∅"],
    answer: 0,
    explain: "Cada elemento puede estar relacionado a lo sumo consigo mismo. Si además es reflexiva, R = ∆."
  },
  {
    topic: "Cap. 1 · Relaciones", ref: "Obs. 1.4.9",
    q: "¿Qué relación puede ser a la vez de equivalencia y de orden?",
    options: ["Sólo la igualdad ∆", "Ninguna", "Cualquier preorden", "Cualquier orden total"],
    answer: 0,
    explain: "La única relación reflexiva que es simétrica y antisimétrica es la igualdad."
  },
  {
    topic: "Cap. 1 · Relaciones", ref: "Ejercicio 1.6",
    q: "Sea R una relación en A y ∆ la diagonal. ¿Cuáles equivalencias son correctas?",
    options: [
      "R reflexiva ⇔ ∆ ⊆ R",
      "R simétrica ⇔ R⁻¹ = R",
      "R transitiva ⇔ R ∘ R ⊆ R",
      "R antisimétrica ⇔ R ∩ R⁻¹ = ∅"
    ],
    answer: [0, 1, 2],
    explain: "La antisimetría equivale a R ∩ R⁻¹ ⊆ ∆, no a que la intersección sea vacía."
  },
  {
    topic: "Cap. 1 · Relaciones", ref: "Ej. 1.3.4",
    q: "Para relaciones finitas, la matriz M(R⁻¹) es:",
    options: ["La transpuesta de M(R)", "La inversa de M(R)", "El complemento de M(R)", "Igual a M(R)"],
    answer: 0,
    explain: "(a, b) ∈ R ⇔ (b, a) ∈ R⁻¹, así que se intercambian filas por columnas."
  },
  {
    topic: "Cap. 1 · Relaciones", ref: "Ejercicio 1.5",
    q: "Sean f : A → B y g : B → C funciones. ¿Cuáles implicaciones son siempre verdaderas?",
    options: [
      "g ∘ f inyectiva ⇒ f inyectiva",
      "g ∘ f sobreyectiva ⇒ g sobreyectiva",
      "f inyectiva ⇒ g ∘ f inyectiva",
      "g sobreyectiva ⇒ g ∘ f sobreyectiva"
    ],
    answer: [0, 1],
    explain: "Las dos últimas son las recíprocas, y el ejercicio pide mostrar que son falsas."
  },
  {
    topic: "Cap. 1 · Relaciones", ref: "Ejercicio 1.12",
    q: "La clausura reflexiva CR(R) de una relación R en A es:",
    options: ["R ∪ ∆", "R ∩ ∆", "R ∪ R⁻¹", "R ∘ R"],
    answer: 0,
    explain: "Es la menor relación reflexiva que contiene a R: se agregan los pares (a, a)."
  },
  {
    topic: "Cap. 1 · Relaciones", ref: "Ejercicio 1.13",
    q: "La clausura simétrica CS(R) de una relación R es:",
    options: ["R ∪ R⁻¹", "R ∩ R⁻¹", "R ∪ ∆", "R⁻¹"],
    answer: 0,
    explain: "Es la menor relación simétrica que contiene a R: se agregan los pares invertidos."
  },
  {
    topic: "Cap. 1 · Relaciones", ref: "Ejercicios 1.11 y 1.14",
    q: "Si |A| = n, la clausura transitiva de R es:",
    options: ["R ∪ R² ∪ ⋯ ∪ Rⁿ", "Rⁿ", "R ∪ ∆", "R ∘ R⁻¹"],
    answer: 0,
    explain: "En general CT(R) = R* = ⋃ Rⁿ; si |A| = n, alcanza con las primeras n potencias."
  },
  {
    topic: "Cap. 1 · Relaciones", ref: "Ejercicio 1.15",
    q: "Para cualquier relación R en A, la relación CT(CR(R)) es:",
    options: ["Un preorden", "Una relación de equivalencia", "Un orden parcial", "La relación vacía"],
    answer: 0,
    explain: "La clausura reflexiva aporta la reflexividad y la transitiva la transitividad."
  },
  {
    topic: "Cap. 1 · Relaciones", ref: "Ejercicio 1.16",
    q: "¿Cuáles son relaciones de equivalencia?",
    options: [
      "En ℤ: x ∼ y ⇔ x − y es par",
      "En ℝ × ℝ: (a, b) ∼ (c, d) ⇔ a + d = c + b",
      "En ℝ: x ∼ y ⇔ xy > 0",
      "En ℝ: x ∼ y ⇔ xy ≥ 0"
    ],
    answer: [0, 1],
    explain: "xy > 0 no es reflexiva (0 · 0 = 0); xy ≥ 0 no es transitiva (1 ∼ 0 y 0 ∼ −1, pero 1 ≁ −1)."
  },
  {
    topic: "Cap. 1 · Relaciones", ref: "Ej. 1.5.9",
    q: "¿Cuántas clases de equivalencia tiene la congruencia módulo m en ℤ (m ∈ ℕ)?",
    options: ["m", "m − 1", "Infinitas", "2"],
    answer: 0,
    explain: "Cada entero es congruente a su resto r con 0 ≤ r < m: las clases son 0̄, 1̄, …, (m−1)̄."
  },
  {
    topic: "Cap. 1 · Relaciones", ref: "Ejercicio 1.17",
    q: "Dada f : A → B, la relación K_f = {(a, a′) : f(a) = f(a′)} es:",
    options: ["Una relación de equivalencia", "Un orden parcial", "Una función", "Siempre la diagonal ∆"],
    answer: 0,
    explain: "Sus clases son las fibras f⁻¹(b). Es la base del teorema de factorización."
  },
  {
    topic: "Cap. 1 · Relaciones", ref: "Ej. 1.1.9",
    q: "La relación de ℕ en ℤ dada por x R y ⇔ y = x/2 es:",
    options: ["Una función parcial que no es función", "Una función", "Una función biyectiva", "Ni siquiera una función parcial"],
    answer: 0,
    explain: "Cada x tiene a lo sumo una imagen, pero los impares no tienen ninguna: Dom(R) ⊊ ℕ."
  },
  {
    topic: "Cap. 1 · Relaciones", ref: "Ej. 1.2.4",
    q: "R es una relación funcional de A en B exactamente cuando en cada fila de M(R) hay:",
    options: ["Exactamente un 1", "A lo sumo un 1", "Al menos dos 1", "Sólo ceros"],
    answer: 0,
    explain: "\"A lo sumo un 1\" caracteriza a las funciones parciales; \"exactamente uno\", a las funciones."
  },
  {
    topic: "Cap. 1 · Relaciones", ref: "Ej. 1.2.4",
    q: "En la matriz de una función, si cada columna tiene a lo sumo un 1, la función es:",
    options: ["Inyectiva", "Sobreyectiva", "Constante", "No necesariamente nada"],
    answer: 0,
    explain: "Ningún elemento de B recibe dos elementos de A. Si hay una columna nula, no es sobreyectiva."
  },
  {
    topic: "Cap. 1 · Relaciones", ref: "Ej. 1.3.8",
    q: "Para las relaciones usuales en ℝ, ¿cuáles igualdades son correctas?",
    options: ["El complemento de ≥ es <", "(= ∪ <) es ≤", "(≤ ∩ >) = ∅", "(≤ ∪ >) = ∅"],
    answer: [0, 1, 2],
    explain: "(≤ ∪ >) es toda la relación trivial ℝ × ℝ, no la vacía."
  },
  {
    topic: "Cap. 1 · Relaciones", ref: "Ej. 1.4.10",
    q: "La relación \"divide a\" en ℤ (donde 0 no divide a nada) es:",
    options: ["Transitiva pero no reflexiva", "Un orden parcial", "Una equivalencia", "Reflexiva pero no transitiva"],
    answer: 0,
    explain: "0 ∤ 0 impide la reflexividad. Restringida a ℤ − {0} es un preorden, no un orden (2 | −2 y −2 | 2)."
  },
  {
    topic: "Cap. 1 · Relaciones", ref: "Ej. 1.4.11",
    q: "¿Es < en ℝ un preorden?",
    options: ["No, porque no es reflexiva", "Sí, es un orden total", "Sí, es reflexiva y transitiva", "No, porque no es transitiva"],
    answer: 0,
    explain: "< es transitiva pero no reflexiva; ≤ y ≥ sí son órdenes."
  },
  {
    topic: "Cap. 1 · Relaciones", ref: "Ej. 1.3.11",
    q: "Si R = {(1, x), (2, x), (3, y), (3, z)} y R′ = {(x, 6), (w, 5)}, entonces R′ ∘ R es:",
    options: ["{(1, 6), (2, 6)}", "{(1, 6)}", "∅", "{(3, 5)}"],
    answer: 0,
    explain: "Sólo x tiene imagen por R′ entre las imágenes de R, y x proviene de 1 y de 2."
  },
  {
    topic: "Cap. 1 · Relaciones", ref: "Ej. 1.5.10",
    q: "Con V ∼ W si existe un isomorfismo lineal, el cociente de los espacios vectoriales reales de dimensión finita se identifica con:",
    options: ["ℕ (la dimensión)", "ℝ", "Un único elemento", "P(ℕ)"],
    answer: 0,
    explain: "Dos espacios de dimensión finita son isomorfos si y sólo si tienen la misma dimensión; ℝⁿ representa la clase n."
  },
  {
    topic: "Cap. 1 · Relaciones", ref: "Ejercicio 1.8",
    q: "Si una relación R tiene alguna de estas propiedades, ¿cuáles pasan siempre a R⁻¹?",
    options: ["Reflexividad", "Simetría", "Antisimetría", "Transitividad", "Ser una función"],
    answer: [0, 1, 2, 3],
    explain: "Las cuatro propiedades se heredan. Pero la inversa de una función sólo es función si la original es biyectiva."
  },

  /* ---------- Cap. 2 (ampliación) ---------- */
  {
    topic: "Cap. 2 · Posets", ref: "Ej. 2.2.4 y 2.2.18",
    q: "Sobre el poset (ℕ, |), ¿qué afirmaciones son correctas?",
    options: ["Tiene mínimo, el 1", "No tiene máximo", "Es totalmente ordenado", "Es bien ordenado"],
    answer: [0, 1],
    explain: "2 y 3 no son comparables, y {2, 3} no tiene mínimo, así que no es total ni bien ordenado."
  },
  {
    topic: "Cap. 2 · Posets", ref: "Ej. 2.2.17",
    q: "¿Cuál de estos posets es bien ordenado?",
    options: ["(ℕ, ≤)", "(ℤ, ≤)", "(ℚ, ≤)", "(ℕ, |)"],
    answer: 0,
    explain: "(ℤ, ≤), (ℚ, ≤) y (ℝ, ≤) no tienen mínimo; (ℕ, |) no es total."
  },
  {
    topic: "Cap. 2 · Posets", ref: "Obs. 2.2.2",
    q: "En un poset cualquiera, ¿qué es siempre cierto?",
    options: ["Todo máximo es maximal", "Todo mínimo es minimal", "Si hay mínimo, es el único minimal", "Todo maximal es máximo"],
    answer: [0, 1, 2],
    explain: "La recíproca falla: puede haber varios maximales y ningún máximo."
  },
  {
    topic: "Cap. 2 · Posets", ref: "Ejercicio 2.5",
    q: "En un poset FINITO (A, ⪯), x₀ = mín A si y sólo si:",
    options: ["x₀ es el único elemento minimal", "x₀ es minimal", "x₀ es comparable con algún elemento", "x₀ no es maximal"],
    answer: 0,
    explain: "En un poset finito, un minimal único es mínimo. En posets infinitos esto puede fallar."
  },
  {
    topic: "Cap. 2 · Posets", ref: "Obs. 2.2.12",
    q: "(ℝ, ≤) es totalmente ordenado. ¿Tiene mínimo?",
    options: ["No; el Teo. 2.2.11 requiere que el conjunto sea finito", "Sí, el 0", "Sí, porque es total", "Sólo si se restringe a ℝ⁺"],
    answer: 0,
    explain: "Todo conjunto finito totalmente ordenado tiene mínimo y máximo, pero (ℝ, ≤) no tiene ninguno."
  },
  {
    topic: "Cap. 2 · Posets", ref: "Ej. 2.3.5",
    q: "En ({1, …, 10}, |), ¿qué es cierto?",
    options: ["sup{2, 5} = 10", "ínf{2, 5} = 1", "{3, 5} no tiene supremo", "sup{3, 5} = 15"],
    answer: [0, 1, 2],
    explain: "La única cota superior de {3, 5} sería 15, que no está en el conjunto, así que {3, 5} no tiene supremo."
  },
  {
    topic: "Cap. 2 · Posets", ref: "Ej. 2.3.7",
    q: "En (ℕ, |), el ínfimo y el supremo de un subconjunto finito son:",
    options: ["Su mcd y su mcm", "Su mcm y su mcd", "Su mínimo y su máximo usuales", "1 y el producto de sus elementos"],
    answer: 0,
    explain: "El producto es una cota superior, pero la menor cota superior es el mcm."
  },
  {
    topic: "Cap. 2 · Posets", ref: "Ej. 2.3.9",
    q: "En (ℚ, ≤), el conjunto A = {x ∈ ℚ : x² < 2}:",
    options: ["Está acotado pero no tiene supremo en ℚ", "Tiene supremo √2 en ℚ", "No está acotado", "Tiene máximo"],
    answer: 0,
    explain: "√2 ∉ ℚ, y siempre hay un racional entre √2 y cualquier cota racional: ℚ no cumple el axioma del supremo."
  },
  {
    topic: "Cap. 2 · Posets", ref: "Ej. 2.1.9",
    q: "En el orden producto, (x, y) ⪯prod (x′, y′) si:",
    options: ["x ⪯ x′ e y ⪯ y′", "x ⪯ x′ o y ⪯ y′", "x ≺ x′, o bien x = x′ e y ⪯ y′", "x ⪯ y′ e y ⪯ x′"],
    answer: 0,
    explain: "Se compara coordenada a coordenada; la tercera opción es el orden lexicográfico."
  },
  {
    topic: "Cap. 2 · Posets", ref: "Ej. 2.1.10",
    q: "En el orden lexicográfico, (a, b) ⪯lex (c, d) si:",
    options: ["a ≺ c, o bien a = c y b ⪯ d", "a ⪯ c y b ⪯ d", "b ≺ d, o bien b = d y a ⪯ c", "a ⪯ d y b ⪯ c"],
    answer: 0,
    explain: "Como en el diccionario: se compara la primera coordenada y sólo si empatan, la segunda."
  },
  {
    topic: "Cap. 2 · Posets", ref: "Ejercicio 2.2",
    q: "Si (A, ⪯A) y (B, ⪯B) son totalmente ordenados, en A × B:",
    options: ["⪯lex es un orden total", "⪯lex es un orden parcial", "⪯prod es siempre un orden total", "⪯prod no es un orden"],
    answer: [0, 1],
    explain: "⪯prod es un orden pero no total: en {0, 1}², (0, 1) y (1, 0) no son comparables."
  },
  {
    topic: "Cap. 2 · Posets", ref: "Ej. 2.4.4",
    q: "La función Id : (ℕ, |) → (ℕ, ≤) es:",
    options: ["Un morfismo de posets biyectivo que no es isomorfismo", "Un isomorfismo de posets", "Ni siquiera un morfismo de posets", "Un anti-isomorfismo"],
    answer: 0,
    explain: "a | b ⇒ a ≤ b, pero 2 ≤ 3 y 2 ∤ 3: la inversa no preserva el orden."
  },
  {
    topic: "Cap. 2 · Posets", ref: "Ej. 2.4.15",
    q: "¿Por qué (ℕ, |) y (ℕ, ≤) no son isomorfos?",
    options: ["Porque (ℕ, ≤) es total y (ℕ, |) no", "Porque tienen distinto cardinal", "Porque (ℕ, |) no tiene mínimo", "Sí son isomorfos"],
    answer: 0,
    explain: "Los isomorfismos de posets preservan ser totalmente ordenado (Teo. 2.4.14)."
  },
  {
    topic: "Cap. 2 · Posets", ref: "Ej. 2.4.20",
    q: "(ℕ, ≤) y (ℕ, ≥) son:",
    options: ["Anti-isomorfos pero no isomorfos", "Isomorfos", "Ni isomorfos ni anti-isomorfos", "Iguales"],
    answer: 0,
    explain: "(ℕ, ≤) tiene mínimo y (ℕ, ≥) no; la identidad es un anti-isomorfismo."
  },
  {
    topic: "Cap. 2 · Posets", ref: "Ej. 2.4.12",
    q: "Todo conjunto totalmente ordenado finito de cardinal n es isomorfo a:",
    options: ["({1, …, n}, ≤)", "(P({1, …, n}), ⊆)", "(Dₙ, |)", "({0, 1}ⁿ, ⪯prod)"],
    answer: 0,
    explain: "Se ordenan los elementos a₁ ⪯ ⋯ ⪯ aₙ y se manda i ↦ aᵢ."
  },
  {
    topic: "Cap. 2 · Posets", ref: "Ej. 2.4.13",
    q: "({0, 1}ⁿ, ⪯prod) es isomorfo a:",
    options: ["(P({1, …, n}), ⊆)", "({1, …, 2ⁿ}, ≤)", "(ℕ, |)", "({0, 1}, ≤)"],
    answer: 0,
    explain: "A cada A ⊆ {1, …, n} le corresponde su vector característico (εᵢ = 1 si i ∈ A)."
  },
  {
    topic: "Cap. 2 · Posets", ref: "Teo. 2.4.17",
    q: "Un isomorfismo de posets f : A → B lleva:",
    options: ["Maximales en maximales", "El mínimo de A en el mínimo de B", "El supremo de X en el supremo de f(X)", "Cada elemento en sí mismo"],
    answer: [0, 1, 2],
    explain: "Preserva todos los elementos distinguidos: maximales, minimales, máximos, mínimos, cotas, ínfimos y supremos."
  },
  {
    topic: "Cap. 2 · Posets", ref: "Cor. 2.4.18",
    q: "Si A está bien ordenado y f : A → B es un isomorfismo de posets, entonces B:",
    options: ["Está bien ordenado", "Puede no estar bien ordenado", "Es finito", "No tiene mínimo"],
    answer: 0,
    explain: "El mínimo de cada X ⊆ A se transporta al mínimo de f(X)."
  },
  {
    topic: "Cap. 2 · Posets", ref: "Teo. 2.2.24",
    q: "El Principio de buena ordenación afirma que:",
    options: ["Todo conjunto no vacío admite un orden que lo hace bien ordenado", "Todo poset es bien ordenado", "(ℝ, ≤) es bien ordenado", "Sólo los conjuntos numerables admiten buen orden"],
    answer: 0,
    explain: "Es equivalente al Axioma de Elección y al Lema de Zorn."
  },
  {
    topic: "Cap. 2 · Posets", ref: "Ej. 2.2.23",
    q: "El Principio de Inducción Transfinita aplicado a (ℕ, ≤) es:",
    options: ["El Principio de Inducción", "El Axioma del supremo", "El Lema de Zorn", "El algoritmo de la división"],
    answer: 0,
    explain: "Si 1 ∈ B y n ∈ B ⇒ n + 1 ∈ B, se cumple la hipótesis (P) y B = ℕ."
  },
  {
    topic: "Cap. 2 · Posets", ref: "Def. 2.2.21",
    q: "La sección inicial determinada por a en (A, ⪯) es:",
    options: ["{x ∈ A : x ≺ a}", "{x ∈ A : a ≺ x}", "{x ∈ A : x ⪯ a o a ⪯ x}", "{a}"],
    answer: 0,
    explain: "Son los elementos estrictamente menores que a; se usa en la inducción transfinita."
  },
  {
    topic: "Cap. 2 · Posets", ref: "Ejercicio 2.7",
    q: "Una anticadena es un subconjunto B tal que, para x, y ∈ B, x ⪯ y ⇒ x = y. ¿Cuáles son siempre anticadenas?",
    options: ["El conjunto de elementos maximales", "El conjunto de elementos minimales", "Cualquier subconjunto totalmente ordenado", "Todo el poset"],
    answer: [0, 1],
    explain: "Dos maximales (o dos minimales) distintos nunca son comparables."
  },
  {
    topic: "Cap. 2 · Posets", ref: "Ejercicio 2.16",
    q: "Un par (f, g) de funciones entre posets es una conexión de Galois si:",
    options: ["f(x) ⪯ y ⇔ x ⪯ g(y)", "f ∘ g = Id", "f(x) ⪯ g(x) para todo x", "f y g son biyectivas"],
    answer: 0,
    explain: "Todo isomorfismo f induce la conexión (f, f⁻¹). Vistos como categorías, es una adjunción (Ej. 10.3.3)."
  },
  {
    topic: "Cap. 2 · Posets", ref: "Lema 2.1.3",
    q: "Si ⪯ es un orden total en A y B ⊆ A, ¿qué es siempre cierto?",
    options: ["⪯|B es un orden total en B", "El orden inverso ⪰ es total", "B tiene máximo", "⪯|B es un buen orden"],
    answer: [0, 1],
    explain: "Restricción e inverso conservan la totalidad, pero B puede ser infinito sin máximo ni mínimo."
  },
  {
    topic: "Cap. 2 · Posets", ref: "Ejercicio 2.6",
    q: "Si X ⊆ Y ⊆ A y existen m_X = mín X y m_Y = mín Y, entonces:",
    options: ["m_Y ⪯ m_X", "m_X ⪯ m_Y", "m_X = m_Y", "No son comparables"],
    answer: 0,
    explain: "m_X ∈ Y y m_Y está por debajo de todo Y. Para los máximos: M_X ⪯ M_Y."
  },

  /* ---------- Cap. 3 (ampliación) ---------- */
  {
    topic: "Cap. 3 · Retículos", ref: "Ej. 3.1.3",
    q: "En M₃ (con 0 < a, b, c < 1 y a, b, c incomparables entre sí), ¿cuánto vale a ∧ b?",
    options: ["0", "1", "c", "No existe"],
    answer: 0,
    explain: "Cualquier par de átomos distintos tiene ínfimo 0 y supremo 1."
  },
  {
    topic: "Cap. 3 · Retículos", ref: "Ej. 3.1.3",
    q: "En N₅ (0 < a < 1 y 0 < b < c < 1, con a incomparable con b y c), ¿qué es cierto?",
    options: ["a ∨ b = 1", "b ∧ c = b", "a ∧ c = 0", "a ∨ b = c"],
    answer: [0, 1, 2],
    explain: "sup{a, b} = sup{a, c} = 1 e ínf{a, b} = ínf{a, c} = 0; como b ⪯ c, ínf{b, c} = b."
  },
  {
    topic: "Cap. 3 · Retículos", ref: "Ej. 3.1.2",
    q: "Todo conjunto totalmente ordenado es:",
    options: ["Un retículo", "Un álgebra de Boole", "Un retículo complementado", "Un poset sin ínfimos"],
    answer: 0,
    explain: "ínf{x, y} y sup{x, y} son simplemente el menor y el mayor de x e y."
  },
  {
    topic: "Cap. 3 · Retículos", ref: "Obs. 3.1.6",
    q: "Si P es el conjunto de números primos, (P, |):",
    options: ["No es un retículo", "Es un retículo", "Es un subretículo de (ℕ, |)", "Es totalmente ordenado"],
    answer: 0,
    explain: "Dos primos distintos no tienen ínfimo ni supremo en P: no todo subconjunto de un retículo es retículo."
  },
  {
    topic: "Cap. 3 · Retículos", ref: "Ej. 3.3.1 y Obs. 3.3.3",
    q: "Sea L′ = {∅, {1}, {1, 2}, {2, 3}, X} ⊆ P(X), con X = {1, 2, 3}. ¿Qué es cierto?",
    options: [
      "(L′, ⊆) es un retículo",
      "L′ no es un subretículo de P(X)",
      "En L′, {1, 2} ∧ {2, 3} = ∅",
      "En L′, {1, 2} ∧ {2, 3} = {2}"
    ],
    answer: [0, 1, 2],
    explain: "{2} ∉ L′, así que el meet en L′ es ∅ ≠ {1, 2} ∩ {2, 3}: L′ es retículo pero no subretículo."
  },
  {
    topic: "Cap. 3 · Retículos", ref: "Obs. 3.3.5",
    q: "Para verificar que L′ ⊆ L es un subretículo, alcanza con chequear x ∨ y, x ∧ y ∈ L′ para:",
    options: ["Pares de elementos no comparables de L′", "Pares de elementos comparables", "x = y", "El máximo y el mínimo de L"],
    answer: 0,
    explain: "Si x ⪯ y, entonces x ∨ y = y y x ∧ y = x ya están en L′."
  },
  {
    topic: "Cap. 3 · Retículos", ref: "Ej. 3.3.8",
    q: "Sobre los retículos (Dₙ, |), ¿qué es cierto?",
    options: ["Si n | m, Dₙ es subretículo de Dₘ", "Dₙ ∩ Dₘ = D_mcd(n, m)", "Cada Dₙ es subretículo de (ℕ, |)", "Dₙ ∪ Dₘ siempre es subretículo"],
    answer: [0, 1, 2],
    explain: "En todos los casos ∨ = mcm y ∧ = mcd. La unión en general no es cerrada por mcd y mcm."
  },
  {
    topic: "Cap. 3 · Retículos", ref: "Ej. 3.4.1",
    q: "¿Es Id : (ℕ, |) → (ℕ, ≤) un morfismo de retículos?",
    options: [
      "No: en (ℕ, |), 2 ∨ 3 = 6, pero en (ℕ, ≤), 2 ∨ 3 = 3",
      "Sí, porque es morfismo de posets",
      "Sí, porque es biyectiva",
      "No, porque (ℕ, ≤) no es retículo"
    ],
    answer: 0,
    explain: "Un morfismo de posets entre retículos no necesariamente preserva join y meet."
  },
  {
    topic: "Cap. 3 · Retículos", ref: "Ej. 3.4.11",
    q: "(D₆, |) es isomorfo a:",
    options: ["({0, 1}², ⪯prod)", "({1, 2, 3, 4}, ≤)", "M₃", "N₅"],
    answer: 0,
    explain: "Ambos tienen el mismo diagrama de Hasse (un rombo): 1 ↦ (0, 0), 2 ↦ (0, 1), 3 ↦ (1, 0), 6 ↦ (1, 1)."
  },
  {
    topic: "Cap. 3 · Retículos", ref: "Ej. 3.4.17 y 3.4.18",
    q: "¿Cuáles de estos retículos son autoduales?",
    options: ["(Dₙ, |), para todo n", "(ℝ, ≤)", "(ℕ, ≤)", "(ℕ, ≥)"],
    answer: [0, 1],
    explain: "k ↦ n/k invierte el orden en Dₙ y x ↦ −x en ℝ. (ℕ, ≤) tiene mínimo pero no máximo."
  },
  {
    topic: "Cap. 3 · Retículos", ref: "Ej. 3.4.17",
    q: "¿Qué función prueba que (Dₙ, |) es autodual?",
    options: ["k ↦ n/k", "k ↦ k²", "k ↦ n − k", "k ↦ mcd(k, n)"],
    answer: 0,
    explain: "Si k | j entonces n/j | n/k: es un isomorfismo de (Dₙ, |) en (Dₙ, \"es múltiplo de\")."
  },
  {
    topic: "Cap. 3 · Retículos", ref: "Ej. 3.4.16",
    q: "Dos conjuntos totalmente ordenados con n elementos (n finito) son:",
    options: ["Retículos isomorfos", "Retículos no necesariamente isomorfos", "Álgebras de Boole", "Retículos sin máximo"],
    answer: 0,
    explain: "Ambos son isomorfos a ({1, …, n}, ≤), y un isomorfismo de orden lo es de retículos."
  },
  {
    topic: "Cap. 3 · Retículos", ref: "Teo. 3.4.19",
    q: "Si f : L → S es un morfismo de retículos, ¿qué es siempre cierto?",
    options: ["Si L′ es subretículo de L, f(L′) es subretículo de S", "Si S′ es subretículo de S, f⁻¹(S′) es subretículo de L", "f(L) = S", "f es inyectiva"],
    answer: [0, 1],
    explain: "Imagen y preimagen de subretículos son subretículos; f no tiene por qué ser sobreyectiva ni inyectiva."
  },
  {
    topic: "Cap. 3 · Retículos", ref: "Ejercicio 3.12",
    q: "Si n = p₁p₂⋯p_l con primos distintos, (Dₙ, |) es isomorfo a:",
    options: ["(P({1, …, l}), ⊆)", "({1, …, n}, ≤)", "(D_l, |)", "M₃"],
    answer: 0,
    explain: "Cada divisor queda determinado por el subconjunto de primos que lo forman."
  },
  {
    topic: "Cap. 3 · Retículos", ref: "Ejercicio 3.10",
    q: "Dada f : X → Y, ¿cuáles son morfismos de retículos?",
    options: [
      "F : P(Y) → P(X), F(B) = f⁻¹(B), siempre",
      "G : P(X) → P(Y), G(A) = f(A), cuando f es inyectiva",
      "G : P(X) → P(Y), G(A) = f(A), para cualquier f",
      "F(B) = f⁻¹(B) sólo si f es biyectiva"
    ],
    answer: [0, 1],
    explain: "La preimagen preserva ∪ y ∩; la imagen directa preserva ∩ sólo si f es inyectiva."
  },
  {
    topic: "Cap. 3 · Retículos", ref: "Ejercicio 3.5",
    q: "En un retículo FINITO, todo subconjunto no vacío:",
    options: ["Tiene ínfimo y supremo", "Tiene mínimo", "Es un subretículo", "Es totalmente ordenado"],
    answer: 0,
    explain: "Por inducción, a₁ ∨ ⋯ ∨ aₙ es el supremo y a₁ ∧ ⋯ ∧ aₙ el ínfimo."
  },
  {
    topic: "Cap. 3 · Retículos", ref: "Teo. 3.2.5",
    q: "En la definición algebraica de retículo, el orden inducido por ∨ y ∧ es:",
    options: ["x ⪯ y ⇔ x ∨ y = y", "x ⪯ y ⇔ x ∨ y = x", "x ⪯ y ⇔ x ∧ y = y", "x ⪯ y ⇔ x = y"],
    answer: 0,
    explain: "Equivalentemente x ⪯ y ⇔ x ∧ y = x. Se piden asociatividad, conmutatividad, idempotencia y absorción."
  },
  {
    topic: "Cap. 3 · Retículos", ref: "Teo. 3.2.4",
    q: "¿Qué propiedades valen en todo retículo?",
    options: ["x ⪯ x ∨ y", "x ∧ y ⪯ x", "x ∨ x = x", "x ∨ y = x ∧ y"],
    answer: [0, 1, 2],
    explain: "x ∨ y = x ∧ y sólo vale cuando x = y."
  },
  {
    topic: "Cap. 3 · Retículos", ref: "Ej. 3.2.8",
    q: "En el retículo dual de (L, ∨, ∧), las operaciones son:",
    options: ["∨* = ∧ y ∧* = ∨", "Las mismas ∨ y ∧", "∨* = ∨ y ∧* = complemento", "No está definido"],
    answer: 0,
    explain: "Al invertir el orden se intercambian join y meet."
  },
  {
    topic: "Cap. 3 · Retículos", ref: "Lema 3.1.11",
    q: "En el retículo producto L × L′, (x, x′) ∨ (y, y′) es:",
    options: ["(x ∨ y, x′ ∨ y′)", "(x ∧ y, x′ ∧ y′)", "(x ∨ x′, y ∨ y′)", "(x, y′)"],
    answer: 0,
    explain: "Con el orden producto, join y meet se calculan coordenada a coordenada."
  },
  {
    topic: "Cap. 3 · Retículos", ref: "Ejercicio 3.8",
    q: "Sea L un retículo y a ⪯ b. ¿Cuáles son siempre subretículos?",
    options: ["{x : x ⪯ a}", "{x : b ⪯ x}", "[a, b] = {x : a ⪯ x ⪯ b}", "{x : x no es comparable con a}"],
    answer: [0, 1, 2],
    explain: "Los ideales principales, los filtros principales y los intervalos son cerrados por ∨ y ∧."
  },
  {
    topic: "Cap. 3 · Retículos", ref: "Ejercicio 3.6",
    q: "En todo retículo, (a ∧ b) ∨ (b ∧ c) ∨ (c ∧ a) y (a ∨ b) ∧ (b ∨ c) ∧ (c ∨ a) cumplen:",
    options: ["El primero ⪯ el segundo", "Son siempre iguales", "El segundo ⪯ el primero", "No son comparables en general"],
    answer: 0,
    explain: "Cada término a ∧ b, b ∧ c, c ∧ a está por debajo de cada a ∨ b, b ∨ c, c ∨ a."
  },
  {
    topic: "Cap. 3 · Retículos", ref: "Ejercicio 3.13",
    q: "(D₂, |) × (D₄, |) es isomorfo a:",
    options: ["(D₁₂, |)", "(D₈, |)", "(D₆, |)", "M₃"],
    answer: 0,
    explain: "Una cadena de 2 por una de 3 da 6 elementos con la forma de D₁₂ ≅ D₃ × D₄."
  },

  /* ---------- Cap. 4 (ampliación) ---------- */
  {
    topic: "Cap. 4 · Retículos especiales", ref: "Ej. 4.1.11 y 4.2.16",
    q: "En M₃ (átomos a, b, c), ¿qué es cierto?",
    options: ["comp(a) = {b, c}", "M₃ es complementado", "M₃ es distributivo", "Cada elemento tiene un único complemento"],
    answer: [0, 1],
    explain: "Es complementado, pero a tiene dos complementos, así que no puede ser distributivo."
  },
  {
    topic: "Cap. 4 · Retículos especiales", ref: "Ej. 4.1.11",
    q: "En N₅ (0 < a < 1, 0 < b < c < 1), ¿cuál es el conjunto de complementos de b?",
    options: ["{a}", "{c}", "{a, c}", "∅"],
    answer: 0,
    explain: "b ∨ a = 1 y b ∧ a = 0. En cambio comp(a) = {b, c}: a tiene dos complementos."
  },
  {
    topic: "Cap. 4 · Retículos especiales", ref: "Ejercicio 4.2",
    q: "En un retículo acotado totalmente ordenado, ¿qué elementos tienen complemento?",
    options: ["Sólo 0 y 1", "Todos", "Ninguno", "Sólo los átomos"],
    answer: 0,
    explain: "Si x ⪯ y, x ∨ y = y y x ∧ y = x: para ser complementos tiene que ser y = 1 y x = 0."
  },
  {
    topic: "Cap. 4 · Álgebras de Boole", ref: "Ej. 4.3.5",
    q: "¿Cuáles de estos retículos (Dₙ, |) son álgebras de Boole?",
    options: ["D₃₀", "D₆", "D₇", "D₁₂", "D₈"],
    answer: [0, 1, 2],
    explain: "(Dₙ, |) es Boole si y sólo si n es producto de primos distintos. 12 = 2²·3 y 8 = 2³ no lo son."
  },
  {
    topic: "Cap. 4 · Álgebras de Boole", ref: "Ej. 4.3.5",
    q: "En el álgebra de Boole (D₃₀, |), el complemento de 6 es:",
    options: ["5", "1", "30", "15"],
    answer: 0,
    explain: "Si q es producto de algunos primos de n, qᶜ es el producto de los restantes: 30/6 = 5."
  },
  {
    topic: "Cap. 4 · Retículos especiales", ref: "Ej. 4.1.4",
    q: "Sobre la acotación de (Dₙ, |) y (ℕ, |), ¿qué es cierto?",
    options: ["(Dₙ, |) es acotado, con ⊤ = n y ⊥ = 1", "(ℕ, |) tiene mínimo 1", "(ℕ, |) es acotado", "En (Dₙ, |), ⊥ = 0"],
    answer: [0, 1],
    explain: "(ℕ, |) no tiene máximo; por eso es preferible usar ⊤ y ⊥ en vez de 1 y 0."
  },
  {
    topic: "Cap. 4 · Retículos especiales", ref: "Ej. 4.2.21 y 4.3.5",
    q: "¿Qué retículos son distributivos?",
    options: ["(ℕ, |)", "Todo (Dₙ, |)", "Todo conjunto totalmente ordenado", "M₃", "N₅"],
    answer: [0, 1, 2],
    explain: "(ℕ, |) no contiene copias de M₃ ni de N₅, y una cadena tampoco puede contenerlas."
  },
  {
    topic: "Cap. 4 · Retículos especiales", ref: "Obs. 4.2.3",
    q: "En un retículo CUALQUIERA, x ∨ (y ∧ z) y (x ∨ y) ∧ (x ∨ z) cumplen:",
    options: ["x ∨ (y ∧ z) ⪯ (x ∨ y) ∧ (x ∨ z)", "Son siempre iguales", "(x ∨ y) ∧ (x ∨ z) ⪯ x ∨ (y ∧ z)", "No son comparables"],
    answer: 0,
    explain: "La desigualdad siempre vale; la igualdad es justamente la distributividad."
  },
  {
    topic: "Cap. 4 · Retículos especiales", ref: "Obs. 4.2.6 y Lema 4.2.9",
    q: "Si L y L′ son retículos distributivos, ¿qué es siempre distributivo?",
    options: ["El dual L*", "Todo subretículo de L", "L × L′", "Cualquier retículo con 5 elementos"],
    answer: [0, 1, 2],
    explain: "N₅ y M₃ tienen 5 elementos y no son distributivos."
  },
  {
    topic: "Cap. 4 · Retículos especiales", ref: "Ej. 4.2.13",
    q: "En M₃, a ∧ (b ∨ c) vale a, mientras que (a ∧ b) ∨ (a ∧ c) vale:",
    options: ["0", "a", "1", "b"],
    answer: 0,
    explain: "a ∧ 1 = a pero 0 ∨ 0 = 0: falla la distributividad."
  },
  {
    topic: "Cap. 4 · Retículos especiales", ref: "Ej. 4.2.19",
    q: "L′ = {∅, {3}, {1, 2}, {2, 3}, X} es isomorfo a M₃ y está dentro de P(X), que es distributivo. ¿Por qué no contradice el Teorema M₃–N₅?",
    options: ["Porque L′ no es un subretículo de P(X)", "Porque P(X) no es distributivo", "Porque L′ no es un retículo", "Sí lo contradice"],
    answer: 0,
    explain: "El teorema habla de subretículos; {1, 2} ∩ {2, 3} = {2} ∉ L′."
  },
  {
    topic: "Cap. 4 · Retículos especiales", ref: "Ejercicio 4.5",
    q: "Un retículo es modular si a ⪯ c ⇒ a ∨ (b ∧ c) = (a ∨ b) ∧ c. ¿Qué es cierto?",
    options: ["Todo retículo distributivo es modular", "M₃ es modular", "N₅ es modular", "Todo retículo modular es distributivo"],
    answer: [0, 1],
    explain: "M₃ es modular pero no distributivo; un retículo modular no tiene subretículos isomorfos a N₅."
  },
  {
    topic: "Cap. 4 · Retículos especiales", ref: "Ejercicio 4.6",
    q: "El retículo (S(ℝ²), ⊆) de subespacios de ℝ²:",
    options: ["No es distributivo", "Es un álgebra de Boole", "Es un subretículo de (P(ℝ²), ⊆)", "Es totalmente ordenado"],
    answer: 0,
    explain: "Con tres rectas distintas por el origen se forma una copia de M₃. Su join es la suma de subespacios, no la unión."
  },
  {
    topic: "Cap. 4 · Álgebras de Boole", ref: "Ej. 4.3.12",
    q: "¿Por qué P({1, 2}) no es una subálgebra de Boole de P({1, 2, 3})?",
    options: ["Porque su máximo {1, 2} no es el máximo X de P({1, 2, 3})", "Porque no es un subretículo", "Porque no es un álgebra de Boole", "Porque no tiene mínimo"],
    answer: 0,
    explain: "Es un álgebra de Boole y un subretículo, pero una subálgebra debe contener 1_B y 0_B."
  },
  {
    topic: "Cap. 4 · Álgebras de Boole", ref: "Ej. 4.3.13 y 4.3.22",
    q: "B = P_f(ℕ) ∪ P_cof(ℕ) (partes finitas y cofinitas de ℕ):",
    options: ["Es un álgebra de Boole no isomorfa a ningún (P(X), ⊆)", "No es un álgebra de Boole", "Es igual a P(ℕ)", "Es finita"],
    answer: 0,
    explain: "B es numerable, y ningún P(X) tiene cardinal ℵ₀: no toda álgebra de Boole infinita es un P(X)."
  },
  {
    topic: "Cap. 4 · Álgebras de Boole", ref: "Ej. 4.3.25",
    q: "¿Cuáles descripciones de átomos son correctas?",
    options: [
      "En (P(X), ⊆): los singuletes {x}",
      "En (Dₙ, |), n libre de cuadrados: los divisores primos de n",
      "En 2ⁿ: las n-uplas con exactamente un 1",
      "En (P(X), ⊆): el conjunto X"
    ],
    answer: [0, 1, 2],
    explain: "X es el máximo, no un átomo. Los átomos cubren al 0."
  },
  {
    topic: "Cap. 4 · Álgebras de Boole", ref: "Ejercicio 4.9",
    q: "Si a ≠ b son átomos de un álgebra de Boole, a ∧ b es:",
    options: ["0", "1", "a", "a ∨ b"],
    answer: 0,
    explain: "a ∧ b ⪯ a, así que a ∧ b ∈ {0, a}; si fuera a, tendríamos a ⪯ b y a = b."
  },
  {
    topic: "Cap. 4 · Álgebras de Boole", ref: "Ej. 4.3.18",
    q: "Fijado x₀ ∈ X, f : P(X) → 2 con f(A) = 1 si x₀ ∈ A y f(A) = 0 si no, es:",
    options: ["Un morfismo de álgebras de Boole", "Sólo un morfismo de posets", "Un isomorfismo", "No preserva complementos"],
    answer: 0,
    explain: "x₀ ∈ A ∪ B ⇔ x₀ ∈ A o x₀ ∈ B, y x₀ ∈ Aᶜ ⇔ x₀ ∉ A."
  },
  {
    topic: "Cap. 4 · Retículos especiales", ref: "Obs. 4.1.16",
    q: "Si f : L → S es un morfismo de retículos entre retículos acotados, ¿vale siempre f(0_L) = 0_S?",
    options: ["No; por ejemplo, f(A) = {1} constante en P(X)", "Sí, siempre", "Sólo si L = S", "Sí, si f es sobreyectiva no hace falta pedirlo"],
    answer: 0,
    explain: "f(0_L) y f(1_L) son el mínimo y el máximo de f(L), no necesariamente de S."
  },
  {
    topic: "Cap. 4 · Álgebras de Boole", ref: "Teo. 4.3.15",
    q: "Un morfismo de retículos f entre álgebras de Boole es morfismo de álgebras de Boole si:",
    options: ["f(0) = 0 y f(1) = 1", "f(xᶜ) = f(x)ᶜ para todo x", "f es inyectiva", "f(x) = x para todo x"],
    answer: [0, 1],
    explain: "Para un morfismo de retículos, preservar 0 y 1 equivale a preservar complementos."
  },
  {
    topic: "Cap. 4 · Álgebras de Boole", ref: "Teo. 4.3.19",
    q: "Si B y B′ son álgebras de Boole, f : B → B′ es isomorfismo de álgebras de Boole si y sólo si es:",
    options: ["Un isomorfismo de retículos", "Un isomorfismo de posets", "Una función biyectiva cualquiera", "Un morfismo de posets biyectivo"],
    answer: [0, 1],
    explain: "Un morfismo de posets biyectivo no alcanza: hace falta que la inversa también preserve el orden."
  },
  {
    topic: "Cap. 4 · Álgebras de Boole", ref: "Cor. 4.3.31",
    q: "Un álgebra de Boole con 16 elementos tiene:",
    options: ["4 átomos", "8 átomos", "16 átomos", "2 átomos"],
    answer: 0,
    explain: "Si tiene n átomos, su cardinal es 2ⁿ = 16, así que n = 4."
  },
  {
    topic: "Cap. 4 · Álgebras de Boole", ref: "Lema 4.3.26",
    q: "En un álgebra de Boole, a es un átomo si y sólo si para cada x:",
    options: ["a ⪯ x o a ⪯ xᶜ, pero no ambas", "a ⪯ x y a ⪯ xᶜ", "x ⪯ a", "a ∧ x = a"],
    answer: 0,
    explain: "Equivalentemente: a ⪯ x o a ∧ x = 0, pero no ambas."
  },
  {
    topic: "Cap. 4 · Álgebras de Boole", ref: "Lema 4.3.7",
    q: "Si B y B′ son álgebras de Boole, ¿qué es también un álgebra de Boole?",
    options: ["El dual B*", "B × B′ con el orden producto", "Cualquier subretículo de B", "Cualquier subconjunto de B"],
    answer: [0, 1],
    explain: "Un subretículo puede no contener los complementos o el 0 y el 1."
  },
  {
    topic: "Cap. 4 · Álgebras de Boole", ref: "Ej. 4.1.14",
    q: "En el álgebra de Boole 2ⁿ, el complemento de (ε₁, …, εₙ) es:",
    options: ["La n-upla con cada coordenada invertida (0 ↔ 1)", "(0, …, 0)", "(1, …, 1)", "La misma n-upla"],
    answer: 0,
    explain: "El complemento se calcula coordenada a coordenada en 2 = {0, 1}."
  },
  {
    topic: "Cap. 4 · Retículos especiales", ref: "Obs. 4.1.8 y 4.1.9",
    q: "En un retículo acotado, ¿qué es cierto?",
    options: [
      "b es complemento de a ⇔ a es complemento de b",
      "⊤ y ⊥ son complementos uno del otro",
      "Es complementado ⇔ todo elemento tiene al menos un complemento",
      "Todo elemento tiene exactamente un complemento"
    ],
    answer: [0, 1, 2],
    explain: "La unicidad requiere distributividad. La tercera usa el Axioma de Elección para elegir los complementos."
  },
  {
    topic: "Cap. 4 · Retículos especiales", ref: "Ejercicio 4.4",
    q: "Si L es un retículo acotado y L′ un subretículo, ¿qué puede ocurrir?",
    options: ["L′ no es acotado", "L′ es acotado con 1_L′ ≠ 1_L", "L es complementado y L′ no", "L′ deja de ser un retículo"],
    answer: [0, 1, 2],
    explain: "Un subretículo siempre es retículo, pero su acotación y complementos pueden diferir de los de L."
  },
  {
    topic: "Cap. 4 · Álgebras de Boole", ref: "Lema 4.3.28",
    q: "En un álgebra de Boole finita, todo b ≠ 0 es igual a:",
    options: ["El supremo de los átomos a con a ⪯ b", "El ínfimo de los átomos", "Su complemento", "Un único átomo"],
    answer: 0,
    explain: "La descomposición b = a₁ ∨ ⋯ ∨ aₙ en átomos distintos es única salvo el orden."
  },
  {
    topic: "Cap. 4 · Álgebras de Boole", ref: "Ej. 4.3.4",
    q: "El álgebra de Boole más pequeña con 0 ≠ 1 es:",
    options: ["2 = {0, 1}", "P(∅)", "M₃", "(D₄, |)"],
    answer: 0,
    explain: "Con ⊕ y ⊙ booleanos; P(∅) tiene un solo elemento (0 = 1)."
  },

  /* ---------- Cap. 5 (ampliación) ---------- */
  {
    topic: "Cap. 5 · Operaciones", ref: "Ej. 5.1.4",
    q: "Sobre la suma en ℕ = {1, 2, 3, …}, ¿qué es cierto?",
    options: ["Es asociativa", "Es conmutativa", "Tiene elemento neutro", "Todo elemento tiene inverso"],
    answer: [0, 1],
    explain: "0 ∉ ℕ, así que no hay neutro, y sin neutro no tiene sentido hablar de inversos."
  },
  {
    topic: "Cap. 5 · Operaciones", ref: "Ej. 5.1.4 y 5.3.9",
    q: "En (ℤ, ·), los elementos con inverso son:",
    options: ["1 y −1", "Todos menos el 0", "Sólo el 1", "Ninguno"],
    answer: 0,
    explain: "En (ℕ, ·) sólo el 1 es invertible; en ℤ también lo es −1."
  },
  {
    topic: "Cap. 5 · Operaciones", ref: "Ej. 5.1.2",
    q: "El producto de matrices n × n (n ≥ 2) es:",
    options: ["Asociativo pero no conmutativo", "Conmutativo pero no asociativo", "Asociativo y conmutativo", "Ni asociativo ni conmutativo"],
    answer: 0,
    explain: "La suma de matrices, en cambio, es asociativa y conmutativa."
  },
  {
    topic: "Cap. 5 · Operaciones", ref: "Ej. 5.1.6",
    q: "Sobre la composición en F(A) = {f : A → A} (|A| ≥ 2), ¿qué es cierto?",
    options: ["Es asociativa", "Tiene neutro Id", "Es conmutativa", "Todo elemento tiene inverso"],
    answer: [0, 1],
    explain: "Sólo las biyecciones son invertibles; además hay funciones con inverso de un solo lado."
  },
  {
    topic: "Cap. 5 · Operaciones", ref: "Obs. 5.1.8 y 5.1.17",
    q: "Un elemento neutro e de una operación es siempre:",
    options: ["Idempotente", "Invertible", "Absorbente", "Cancelativo a derecha pero no a izquierda"],
    answer: [0, 1],
    explain: "e ∗ e = e lo hace idempotente y su propio inverso."
  },
  {
    topic: "Cap. 5 · Operaciones", ref: "Ej. 5.1.9",
    q: "En (ℤ, ·), ¿qué es cierto?",
    options: ["0 es absorbente", "Los idempotentes son 0 y 1", "Todo elemento es cancelativo", "1 es absorbente"],
    answer: [0, 1],
    explain: "0 no es cancelativo: 0 · 2 = 0 · 3 y 2 ≠ 3."
  },
  {
    topic: "Cap. 5 · Operaciones", ref: "Ej. 5.1.13",
    q: "En X = {a, b, c} con neutro a, se tiene b ∗ b = a y b ∗ c = c ∗ b = a: b tiene dos inversos. ¿Qué propiedad NO puede cumplir ∗?",
    options: ["La asociatividad", "La conmutatividad", "Tener neutro", "Ser cerrada"],
    answer: 0,
    explain: "Con asociatividad y neutro, el inverso es único (Lema 5.1.15)."
  },
  {
    topic: "Cap. 5 · Operaciones", ref: "Ej. 5.1.11",
    q: "En (F(ℕ), ∘), la función f(n) = 2n es:",
    options: ["Cancelativa a izquierda pero no a derecha", "Cancelativa a derecha pero no a izquierda", "Cancelativa", "No es cancelativa de ningún lado"],
    answer: 0,
    explain: "f ∘ g = f ∘ h ⇒ g = h porque f es inyectiva; pero f no es sobreyectiva."
  },
  {
    topic: "Cap. 5 · Operaciones", ref: "Ej. 5.1.12",
    q: "En un retículo L, la operación ∧ tiene elemento neutro si y sólo si:",
    options: ["L tiene máximo", "L tiene mínimo", "L es distributivo", "L es finito"],
    answer: 0,
    explain: "e ∧ x = x para todo x exige x ⪯ e. Para ∨, el neutro sería el mínimo."
  },
  {
    topic: "Cap. 5 · Operaciones", ref: "Ejercicio 5.4",
    q: "¿Cuántos elementos absorbentes (biláteros) puede tener una operación?",
    options: ["A lo sumo uno", "Exactamente uno", "Cualquier cantidad", "Al menos dos"],
    answer: 0,
    explain: "Si a y a′ son absorbentes, a = a ∗ a′ = a′. Absorbentes de un solo lado puede haber varios."
  },
  {
    topic: "Cap. 5 · Operaciones", ref: "Ej. 5.2.4",
    q: "GL(n, ℝ) (matrices invertibles) es un subconjunto cerrado de Mₙₓₙ para:",
    options: ["El producto, pero no la suma", "La suma, pero no el producto", "Ambas operaciones", "Ninguna"],
    answer: 0,
    explain: "det(AB) = det(A)det(B) ≠ 0, pero Id + (−Id) = 0 es singular."
  },
  {
    topic: "Cap. 5 · Operaciones", ref: "Ej. 5.2.8",
    q: "Si Y ⊆ X es cerrado para ∗ y NO contiene al neutro de X, ¿puede Y tener su propio neutro?",
    options: ["Sí; por ejemplo {A} con A una matriz idempotente distinta de Id", "No, nunca", "Sólo si X es un grupo", "Sólo si Y = X"],
    answer: 0,
    explain: "A · A = A, así que A es neutro (e invertible) en {A}, aunque no lo sea en M₂ₓ₂."
  },
  {
    topic: "Cap. 5 · Operaciones", ref: "Ej. 5.3.6",
    q: "¿Qué operaciones de ℤ se inducen al cociente ℤₘ?",
    options: ["La suma", "El producto", "El máximo usual máx(x, y)", "La división"],
    answer: [0, 1],
    explain: "Si x ≡ x′ e y ≡ y′ (m), entonces x + y ≡ x′ + y′ y xy ≡ x′y′. máx no es compatible: 1 ≡ 4 (3), pero máx(1, 2) = 2 ≢ 4 = máx(4, 2)."
  },
  {
    topic: "Cap. 5 · Operaciones", ref: "Ej. 5.3.9",
    q: "En (ℤₘ, +), si 0 < x < m, el opuesto de x̄ es:",
    options: ["(m − x)̄", "x̄", "0̄", "(x − m)̄ con x − m ≥ 0"],
    answer: 0,
    explain: "−x ≡ m − x (mód m)."
  },
  {
    topic: "Cap. 5 · Operaciones", ref: "Ej. 6.3.4 y 6.3.13",
    q: "¿Qué elementos de (ℤ₁₀, ·) son invertibles?",
    options: ["1", "3", "7", "9", "5", "2"],
    answer: [0, 1, 2, 3],
    explain: "Son los k con mcd(k, 10) = 1: 3·7 = 21 ≡ 1 y 9·9 = 81 ≡ 1."
  },
  {
    topic: "Cap. 5 · Operaciones", ref: "Ej. 5.3.7",
    q: "En F(A), sea f ∼ g ⇔ f(a) = g(a) para un a fijo. ¿Se induce la composición al cociente?",
    options: ["No: hay f ∼ f′ y g ∼ g′ con f ∘ g ≁ f′ ∘ g′", "Sí, siempre", "Sólo si A es finito", "Sí, porque ∼ es de equivalencia"],
    answer: 0,
    explain: "Que ∼ sea de equivalencia no basta; hace falta que sea compatible con la operación."
  },
  {
    topic: "Cap. 5 · Operaciones", ref: "Ejercicio 5.8",
    q: "En ℝ con x ∼ y ⇔ x − y ∈ ℤ, ¿qué operación se induce al cociente ℝ/∼?",
    options: ["La suma", "El producto", "Ambas", "Ninguna"],
    answer: 0,
    explain: "La suma sí. El producto no: 1/2 ∼ 3/2, pero (1/2)(1/2) = 1/4 ≁ 3/4 = (3/2)(1/2)."
  },
  {
    topic: "Cap. 5 · Operaciones", ref: "Lema 5.1.18",
    q: "Si x* es un inverso a derecha de x, entonces:",
    options: ["x es un inverso a izquierda de x*", "x es un inverso a derecha de x*", "x* = x", "x* es absorbente"],
    answer: 0,
    explain: "x ∗ x* = e se lee de los dos lados: x* es inverso a derecha de x, y x es inverso a izquierda de x*."
  },
  {
    topic: "Cap. 5 · Operaciones", ref: "Ej. 5.2.7",
    q: "En el conjunto B(A) de biyecciones de A con la composición:",
    options: ["Todo elemento tiene inverso", "La composición es conmutativa", "No hay neutro", "La composición no es cerrada"],
    answer: 0,
    explain: "Una función es biyectiva si y sólo si es invertible; Id es el neutro. En general no conmuta."
  },
  {
    topic: "Cap. 5 · Operaciones", ref: "Ejercicio 5.6",
    q: "En X × Y con la operación producto, si x es cancelativo a derecha en X e y en Y, entonces (x, y) es:",
    options: ["Cancelativo a derecha", "Absorbente", "El neutro", "Idempotente"],
    answer: 0,
    explain: "Las propiedades se verifican coordenada a coordenada."
  },
  {
    topic: "Cap. 5 · Operaciones", ref: "Ej. 5.3.3",
    q: "En (ℝ², +) como producto de (ℝ, +) consigo mismo, el inverso de (x, y) es:",
    options: ["(−x, −y)", "(1/x, 1/y)", "(y, x)", "(0, 0)"],
    answer: 0,
    explain: "El neutro es (0, 0), y los inversos se calculan coordenada a coordenada."
  },

  /* ---------- Cap. 6 (ampliación) ---------- */
  {
    topic: "Cap. 6 · Estructuras algebraicas", ref: "Ej. 5.1.4, 5.1.10 y 6.5.21",
    q: "¿Cuáles son grupos?",
    options: ["(ℤ, +)", "(ℝ − {0}, ·)", "(GL(n, ℝ), ·)", "(ℕ, +)", "(Mₙₓₙ, ·)"],
    answer: [0, 1, 2],
    explain: "(ℕ, +) no tiene neutro, y en (Mₙₓₙ, ·) las matrices singulares no tienen inverso."
  },
  {
    topic: "Cap. 6 · Estructuras algebraicas", ref: "Ej. 6.1.5",
    q: "Si L es un retículo acotado, ¿qué es cierto?",
    options: ["(L, ∧) es un monoide conmutativo con neutro 1", "(L, ∨) es un monoide conmutativo con neutro 0", "(L, ∧) es un grupo", "(L, ∨) tiene neutro 1"],
    answer: [0, 1],
    explain: "Ningún elemento distinto del neutro es invertible, así que no son grupos (salvo L trivial)."
  },
  {
    topic: "Cap. 6 · Estructuras algebraicas", ref: "Ej. 6.1.6",
    q: "¿Cuántos elementos tiene el grupo simétrico Sₙ?",
    options: ["n!", "n", "2ⁿ", "n²"],
    answer: 0,
    explain: "Cada biyección de {1, …, n} en sí mismo es una permutación."
  },
  {
    topic: "Cap. 6 · Estructuras algebraicas", ref: "Ej. 6.1.7",
    q: "El grupo de rotaciones del plano alrededor del origen, con la composición:",
    options: ["Es abeliano", "No es abeliano", "No tiene neutro", "Es finito"],
    answer: 0,
    explain: "R_θ ∘ R_ρ = R_(θ+ρ) = R_ρ ∘ R_θ."
  },
  {
    topic: "Cap. 6 · Estructuras algebraicas", ref: "Ejercicio 6.6",
    q: "Sea G un grupo. ¿Cuáles condiciones son equivalentes a que G sea abeliano?",
    options: ["(ab)² = a²b² para todo a, b", "(ab)⁻¹ = a⁻¹b⁻¹ para todo a, b", "(ab)ⁿ = aⁿbⁿ para todo n ∈ ℤ", "a² = e para todo a"],
    answer: [0, 1, 2],
    explain: "a² = e implica abeliano, pero no al revés: (ℤ, +) es abeliano y 1 + 1 ≠ 0."
  },
  {
    topic: "Cap. 6 · Estructuras algebraicas", ref: "Obs. 6.2.3",
    q: "En un semigrupo arbitrario, ¿vale (a ∗ b)ⁿ = aⁿ ∗ bⁿ?",
    options: ["No en general; falla por ejemplo en S₃", "Sí, siempre", "Sí, si n es par", "Sólo si a = b"],
    answer: 0,
    explain: "Vale en semigrupos conmutativos (Lema 6.2.4)."
  },
  {
    topic: "Cap. 6 · Estructuras algebraicas", ref: "Def. 6.2.1, 6.2.5 y 6.2.7",
    q: "La potencia aⁿ está definida para n ∈ ℕ en un semigrupo. ¿Para qué exponentes está definida en un grupo?",
    options: ["n ∈ ℤ", "n ∈ ℕ", "n ∈ ℕ₀", "n ∈ ℚ"],
    answer: 0,
    explain: "En un monoide se agrega a⁰ = e (n ∈ ℕ₀); en un grupo, aᵏ = (a⁻¹)⁻ᵏ para k < 0."
  },
  {
    topic: "Cap. 6 · Estructuras algebraicas", ref: "Obs. 6.2.10",
    q: "En notación aditiva, la \"potencia\" aⁿ se escribe:",
    options: ["na", "aⁿ", "a + n", "a/n"],
    answer: 0,
    explain: "Operar a consigo mismo n veces con + da a + ⋯ + a = na."
  },
  {
    topic: "Cap. 6 · Estructuras algebraicas", ref: "Ej. 6.3.12",
    q: "Para n ≠ 1, el conjunto de múltiplos de n en (ℕ, ·) es:",
    options: ["Un subsemigrupo pero no un submonoide", "Un submonoide", "Un subgrupo", "No es cerrado para ·"],
    answer: 0,
    explain: "Es cerrado para ·, pero no contiene al 1."
  },
  {
    topic: "Cap. 6 · Estructuras algebraicas", ref: "Ej. 6.3.11",
    q: "Si x es idempotente y distinto del neutro e de un monoide X, entonces {x} es:",
    options: ["Un monoide, pero no un submonoide de X", "Un submonoide de X", "Un subgrupo de X", "No es un monoide"],
    answer: 0,
    explain: "x es la identidad de {x}, pero un submonoide debe contener a e."
  },
  {
    topic: "Cap. 6 · Estructuras algebraicas", ref: "Ej. 6.3.13",
    q: "Y = {1, 3, 7, 9} ⊆ (ℤ₁₀, ·) es:",
    options: ["Un submonoide que además es un grupo", "Sólo un subsemigrupo", "No es cerrado", "Un subgrupo de (ℤ₁₀, ·)"],
    answer: 0,
    explain: "Es cerrado y contiene al 1. No se dice \"subgrupo\" porque (ℤ₁₀, ·) no es un grupo."
  },
  {
    topic: "Cap. 6 · Estructuras algebraicas", ref: "Ej. 6.3.21 y 6.5.21",
    q: "¿Cuáles son subgrupos de GL(n, ℝ)?",
    options: ["O(n) = {A : A⁻¹ = Aᵗ}", "SL(n, ℝ) = {A : det A = 1}", "Las matrices con det A = 2", "Las matrices con todas sus entradas positivas"],
    answer: [0, 1],
    explain: "SL(n, ℝ) = det⁻¹(1) es la preimagen de un subgrupo; det = 2 no contiene a Id."
  },
  {
    topic: "Cap. 6 · Estructuras algebraicas", ref: "Obs. 6.4.3 y 6.4.5",
    q: "En un grupo G, ¿qué es siempre cierto?",
    options: ["⟨a⟩ = ⟨a⁻¹⟩", "e es el único elemento de orden 1", "Si a es generador, a⁻¹ también", "o(a) = o(G) para todo a"],
    answer: [0, 1, 2],
    explain: "o(e) = 1, y o(a) puede ser cualquier divisor de o(G) (si G es finito)."
  },
  {
    topic: "Cap. 6 · Estructuras algebraicas", ref: "Ej. 6.4.10",
    q: "En (ℤ, +), ⟨m⟩ ∩ ⟨n⟩ es igual a:",
    options: ["⟨mcm(m, n)⟩", "⟨mcd(m, n)⟩", "⟨mn⟩ siempre", "{0}"],
    answer: 0,
    explain: "La intersección son los múltiplos comunes, generados por el menor positivo: el mcm."
  },
  {
    topic: "Cap. 6 · Estructuras algebraicas", ref: "Ej. 6.5.2",
    q: "f : ℕ → ℕ, f(n) = 2n es un homomorfismo de semigrupos:",
    options: ["De (ℕ, +) en (ℕ, +), pero no de (ℕ, ·) en (ℕ, ·)", "De (ℕ, ·) en (ℕ, ·)", "En ambos casos", "En ningún caso"],
    answer: 0,
    explain: "2(n + m) = 2n + 2m, pero f(2 · 3) = 12 ≠ 24 = f(2) · f(3)."
  },
  {
    topic: "Cap. 6 · Estructuras algebraicas", ref: "Ej. 6.5.3",
    q: "Un homomorfismo de semigrupos entre monoides, ¿lleva siempre el neutro al neutro?",
    options: ["No; por eso se pide f(e_X) = e_Y para morfismos de monoides", "Sí, siempre", "Sólo si es inyectivo", "Sólo si los monoides son finitos"],
    answer: 0,
    explain: "Ejemplo: la función constante en una matriz idempotente A ≠ Id. Entre grupos sí vale (Teo. 6.5.7)."
  },
  {
    topic: "Cap. 6 · Estructuras algebraicas", ref: "Ej. 6.5.15",
    q: "La proyección π : ℤ → ℤₘ, π(x) = x̄ es:",
    options: ["Un homomorfismo de grupos", "Un epimorfismo", "Un monomorfismo", "Un isomorfismo"],
    answer: [0, 1],
    explain: "No es inyectiva: π(x + km) = π(x)."
  },
  {
    topic: "Cap. 6 · Estructuras algebraicas", ref: "Ej. 6.5.16",
    q: "f : (ℝ, +) → (rotaciones, ∘), f(θ) = R_θ es:",
    options: ["Un epimorfismo que no es monomorfismo", "Un isomorfismo", "Un monomorfismo que no es epimorfismo", "No es homomorfismo"],
    answer: 0,
    explain: "f(θ + 2kπ) = f(θ): el núcleo es 2πℤ."
  },
  {
    topic: "Cap. 6 · Estructuras algebraicas", ref: "Ej. 6.5.18",
    q: "Fijado a ∈ G, la conjugación I_a(g) = aga⁻¹ es:",
    options: ["Un automorfismo de G", "Un homomorfismo no inyectivo", "La identidad siempre", "Un homomorfismo sólo si G es abeliano"],
    answer: 0,
    explain: "Preserva productos, es inyectiva y su inversa es I_(a⁻¹). Si G es abeliano, I_a = Id."
  },
  {
    topic: "Cap. 6 · Estructuras algebraicas", ref: "Ej. 6.5.20",
    q: "Todo subgrupo de (ℤₘ, +) es:",
    options: ["Cíclico", "Trivial", "Igual a ℤₘ", "De orden primo"],
    answer: 0,
    explain: "Se prueba con la preimagen por π : ℤ → ℤₘ y los subgrupos de ℤ."
  },
  {
    topic: "Cap. 6 · Estructuras algebraicas", ref: "Ejercicio 6.11",
    q: "El centro Z(G) = {a ∈ G : ab = ba para todo b} es:",
    options: ["Un subgrupo abeliano de G", "Igual a G siempre", "Vacío en grupos no abelianos", "No necesariamente un subgrupo"],
    answer: 0,
    explain: "G es abeliano si y sólo si Z(G) = G. Además Z(G) ◁ G (Ejercicio 7.5)."
  },
  {
    topic: "Cap. 6 · Estructuras algebraicas", ref: "Ejercicio 6.12",
    q: "Sean a, b elementos de un grupo. ¿Qué es siempre cierto?",
    options: ["Si aᵐ = e, entonces o(a) | m", "o(a) = o(a⁻¹)", "o(b⁻¹ab) = o(a)", "o(ab) = o(a) · o(b)"],
    answer: [0, 1, 2],
    explain: "En GL(2, ℚ) hay A y B de órdenes 4 y 3 con AB de orden infinito."
  },
  {
    topic: "Cap. 6 · Estructuras algebraicas", ref: "Ejercicio 6.9",
    q: "¿Es ℤ ⊕ ℤ un grupo cíclico?",
    options: ["No", "Sí, generado por (1, 1)", "Sí, generado por (1, 0)", "Sólo como monoide"],
    answer: 0,
    explain: "Ningún elemento genera todo: ⟨(a, b)⟩ = {(ka, kb)} no contiene a la vez a (1, 0) y (0, 1)."
  },
  {
    topic: "Cap. 6 · Estructuras algebraicas", ref: "Ejercicio 6.15",
    q: "¿Cuáles pares de grupos son isomorfos?",
    options: [
      "({−1, 1}, ·) y (ℤ₂, +)",
      "Los invertibles de (ℤ₈, ·) y ℤ₂ ⊕ ℤ₂",
      "Cualquier subgrupo no trivial de (ℤ, +) y (ℤ, +)",
      "(ℤ₄, +) y ℤ₂ ⊕ ℤ₂"
    ],
    answer: [0, 1, 2],
    explain: "{1, 3, 5, 7} ⊆ ℤ₈ tiene todos sus elementos de orden ≤ 2, mientras que ℤ₄ tiene un elemento de orden 4."
  },
  {
    topic: "Cap. 6 · Estructuras algebraicas", ref: "Ejercicio 6.16",
    q: "Un grupo G es abeliano si y sólo si la función a ↦ a⁻¹ es:",
    options: ["Un automorfismo de G", "La identidad", "Constante", "No inyectiva"],
    answer: 0,
    explain: "(ab)⁻¹ = b⁻¹a⁻¹ coincide con a⁻¹b⁻¹ exactamente cuando G conmuta."
  },
  {
    topic: "Cap. 6 · Estructuras algebraicas", ref: "Ejercicios 6.2, 6.3 y 6.5",
    q: "Sobre monoides, inversos y semigrupos cancelativos, ¿qué afirmaciones son verdaderas?",
    options: [
      "Un monoide donde todo elemento tiene inverso a derecha es un grupo",
      "Los elementos invertibles de un monoide forman un grupo",
      "Todo semigrupo cancelativo finito es un grupo",
      "Todo semigrupo cancelativo es un grupo"
    ],
    answer: [0, 1, 2],
    explain: "Para infinitos falla: (ℕ, +) es cancelativo y no es un grupo."
  },
  {
    topic: "Cap. 6 · Estructuras algebraicas", ref: "Ejercicio 6.13",
    q: "Si f : G → H es un isomorfismo de grupos, ¿qué se preserva?",
    options: ["o(a) = o(f(a))", "Ser abeliano", "Ser cíclico", "Los elementos (f(a) = a)"],
    answer: [0, 1, 2],
    explain: "Además o(G) = o(H) y f(Z(G)) = Z(H)."
  },
  {
    topic: "Cap. 6 · Estructuras algebraicas", ref: "Ejercicio 6.10",
    q: "Un homomorfismo f desde un grupo cíclico G = ⟨a⟩ queda determinado por:",
    options: ["f(a)", "f(e)", "La imagen de cualquier elemento", "No queda determinado"],
    answer: 0,
    explain: "f(aⁿ) = f(a)ⁿ para todo n ∈ ℤ, y f(⟨a⟩) = ⟨f(a)⟩."
  },
  {
    topic: "Cap. 6 · Estructuras algebraicas", ref: "Ejercicio 6.17",
    q: "El protocolo de Diffie-Hellman usa un grupo cíclico ⟨g⟩ donde es difícil:",
    options: ["Calcular g^(ab) a partir de gᵃ y gᵇ", "Calcular gᵃ a partir de a", "Multiplicar elementos", "Encontrar el neutro"],
    answer: 0,
    explain: "Alice publica gᵃ, Bob publica gᵇ, y ambos calculan g^(ab) sin que Eve pueda hacerlo."
  },

  /* ---------- Cap. 7 (ampliación) ---------- */
  {
    topic: "Cap. 7 · Grupos", ref: "Ej. 7.1.5 y 7.2.7",
    q: "¿Qué afirmaciones sobre coclases y normalidad son correctas?",
    options: [
      "En un grupo abeliano, coclases a izquierda y a derecha coinciden",
      "SO(2) es un subgrupo abeliano de GL(2, ℝ) que no es normal",
      "Todo subgrupo abeliano es normal",
      "En todo grupo, aH = Ha para todo a y todo subgrupo H"
    ],
    answer: [0, 1],
    explain: "Que H sea abeliano no alcanza: lo que importa es si conmuta \"con G\" (aH = Ha)."
  },
  {
    topic: "Cap. 7 · Grupos", ref: "Ej. 7.1.4",
    q: "En (ℤ, +), la coclase de k módulo H = ⟨m⟩ es:",
    options: ["{k + jm : j ∈ ℤ}, la clase de k módulo m", "{k}", "{jk : j ∈ ℤ}", "ℤ"],
    answer: 0,
    explain: "a ≡ b (H) ⇔ a − b es múltiplo de m: es la congruencia módulo m."
  },
  {
    topic: "Cap. 7 · Grupos", ref: "Ej. 7.1.12",
    q: "Si p es primo, ¿qué subgrupos tiene (ℤₚ, +)?",
    options: ["Sólo {0} y ℤₚ", "Uno por cada divisor de p − 1", "Infinitos", "Sólo ℤₚ"],
    answer: 0,
    explain: "Por Lagrange, el orden de un subgrupo divide a p: es 1 o p."
  },
  {
    topic: "Cap. 7 · Grupos", ref: "Ej. 7.1.13",
    q: "En (ℤ₄, +), ¿qué es cierto?",
    options: ["o(2) = 2", "1 y 3 son generadores", "⟨2⟩ = {0, 2}", "o(2) = 4"],
    answer: [0, 1, 2],
    explain: "2 + 2 = 0, así que 2 no genera ℤ₄."
  },
  {
    topic: "Cap. 7 · Grupos", ref: "Ej. 7.2.8",
    q: "En S₃, el subgrupo N = {Id, a, a²} generado por un 3-ciclo a es:",
    options: ["Normal", "No normal", "No es un subgrupo", "Igual a S₃"],
    answer: 0,
    explain: "Tiene índice 2 en S₃ y sus coclases a izquierda y a derecha coinciden."
  },
  {
    topic: "Cap. 7 · Grupos", ref: "Teo. 7.2.9",
    q: "Sea N un subgrupo de G. ¿Cuáles condiciones equivalen a N ◁ G?",
    options: ["aN = Na para todo a ∈ G", "aNa⁻¹ ⊆ N para todo a ∈ G", "aNa⁻¹ = N para todo a ∈ G", "N es abeliano"],
    answer: [0, 1, 2],
    explain: "Las tres primeras son equivalentes por el Teo. 7.2.9; la abelianidad de N no tiene que ver."
  },
  {
    topic: "Cap. 7 · Grupos", ref: "Ej. 7.2.11 y 7.3.12",
    q: "Sobre SO(n) ⊆ O(n), ¿qué es cierto?",
    options: ["SO(n) ◁ O(n)", "O(n)/SO(n) ≃ (ℤ₂, +)", "SO(n) = O(n)", "O(n)/SO(n) ≃ ℤ"],
    answer: [0, 1],
    explain: "f(A) = 0 si det A = 1 y 1 si det A = −1 es un epimorfismo O(n) → ℤ₂ con núcleo SO(n)."
  },
  {
    topic: "Cap. 7 · Grupos", ref: "Ej. 7.3.10",
    q: "El subgrupo ⟨i⟩ de (ℂ*, ·) generado por la unidad imaginaria es isomorfo a:",
    options: ["ℤ₄", "ℤ", "ℤ₂", "ℤ₂ ⊕ ℤ₂"],
    answer: 0,
    explain: "f(k) = iᵏ es un epimorfismo ℤ → ⟨i⟩ con núcleo ⟨4⟩, y se aplica el Primer Teorema de Isomorfismo."
  },
  {
    topic: "Cap. 7 · Grupos", ref: "Ej. 7.3.11",
    q: "El círculo S¹ = {z ∈ ℂ : |z| = 1} con el producto es isomorfo a:",
    options: ["ℝ/ℤ", "ℤ", "ℝ", "ℤ₂"],
    answer: 0,
    explain: "φ(θ) = cos 2πθ + i sen 2πθ es un homomorfismo (ℝ, +) → (ℂ*, ·) con núcleo ℤ e imagen S¹."
  },
  {
    topic: "Cap. 7 · Grupos", ref: "Lema 7.3.2 y Teo. 7.3.4",
    q: "Sea N ◁ G y π : G → G/N la proyección. ¿Qué es cierto?",
    options: ["π es un homomorfismo de grupos", "ker(π) = N", "N es núcleo de algún homomorfismo con dominio G", "π es inyectiva"],
    answer: [0, 1, 2],
    explain: "Los subgrupos normales son exactamente los núcleos. π sólo es inyectiva si N = {e}."
  },
  {
    topic: "Cap. 7 · Grupos", ref: "Ej. 7.4.9",
    q: "¿Cuáles son generadores de (ℤ₁₀, +)?",
    options: ["1", "3", "7", "9", "2", "5"],
    answer: [0, 1, 2, 3],
    explain: "k genera ℤ₁₀ si y sólo si mcd(k, 10) = 1."
  },
  {
    topic: "Cap. 7 · Grupos", ref: "Ej. 7.4.9",
    q: "En (ℤ₁₀, +), el orden de 2 es:",
    options: ["5", "2", "10", "4"],
    answer: 0,
    explain: "5 · 2 = 10 ≡ 0 y ningún múltiplo menor da 0; ⟨2⟩ ≃ ℤ₅."
  },
  {
    topic: "Cap. 7 · Grupos", ref: "Teo. 7.5.1",
    q: "Si N, K ◁ G, G = NK y N ∩ K = {e}, entonces:",
    options: ["G ≃ N × K", "G ≃ N", "G es cíclico", "N = K"],
    answer: 0,
    explain: "Es la caracterización interna del producto directo."
  },
  {
    topic: "Cap. 7 · Grupos", ref: "Ej. 7.5.2",
    q: "(ℂ*, ·) es isomorfo a:",
    options: ["ℝ⁺ × S¹", "ℝ × ℝ", "ℝ⁺", "S¹"],
    answer: 0,
    explain: "z = |z| · (z/|z|), con ℝ⁺ ∩ S¹ = {1} y ambos normales (ℂ* es abeliano)."
  },
  {
    topic: "Cap. 7 · Grupos", ref: "Ej. 7.5.3",
    q: "Si mcd(p, q) = 1, entonces ℤ_pq es isomorfo a:",
    options: ["ℤₚ ⊕ ℤ_q", "ℤ_(p+q)", "ℤₚ", "ℤ"],
    answer: 0,
    explain: "Por ejemplo, ℤ₆ ≃ ℤ₂ ⊕ ℤ₃. Se usa Teo. 7.5.1 con N = ⟨p⟩ y K = ⟨q⟩."
  },
  {
    topic: "Cap. 7 · Grupos", ref: "Ejercicio 7.14",
    q: "Todo grupo de orden 4 es isomorfo a:",
    options: ["(ℤ₄, +) o (ℤ₂, +) ⊕ (ℤ₂, +)", "(ℤ₄, +) siempre", "S₃", "(ℤ₂, +)"],
    answer: 0,
    explain: "Si hay un elemento de orden 4 es cíclico; si no, todos los elementos distintos de e tienen orden 2."
  },
  {
    topic: "Cap. 7 · Grupos", ref: "Ejercicio 7.10",
    q: "Si n | m y H = ⟨n̄⟩ ⊆ ℤₘ, entonces ℤₘ/H es isomorfo a:",
    options: ["ℤₙ", "ℤₘ", "ℤ_(m/n)", "{0}"],
    answer: 0,
    explain: "Cocientar por los múltiplos de n identifica las clases módulo n."
  },
  {
    topic: "Cap. 7 · Grupos", ref: "Ejercicios 7.4, 7.5 y 7.8",
    q: "Sobre subgrupos normales, ¿qué afirmaciones son verdaderas?",
    options: [
      "Si N₁, N₂ ◁ G, entonces N₁ ∩ N₂ ◁ G",
      "Z(G) ◁ G",
      "Si N ◁ G y f : G → H es un homomorfismo, f(N) ◁ H",
      "Todo subgrupo de un grupo no abeliano es normal"
    ],
    answer: [0, 1],
    explain: "f(N) es subgrupo de H pero no necesariamente normal."
  },
  {
    topic: "Cap. 7 · Grupos", ref: "Ejercicios 7.1 y 7.7",
    q: "Sobre grupos cíclicos y subgrupos propios, ¿qué afirmaciones son verdaderas?",
    options: ["Sₙ no es cíclico para n ≥ 3", "Todo grupo infinito tiene al menos un subgrupo propio", "S₃ es abeliano", "Todo grupo finito es cíclico"],
    answer: [0, 1],
    explain: "S₃ no es abeliano (por eso no es cíclico)."
  },
  {
    topic: "Cap. 7 · Grupos", ref: "Ejercicio 7.6",
    q: "En un grupo ABELIANO, el conjunto de elementos de orden finito:",
    options: ["Es un subgrupo", "Nunca es un subgrupo", "Es siempre todo el grupo", "Es siempre {e}"],
    answer: 0,
    explain: "Si aᵐ = e y bⁿ = e, entonces (ab)ᵐⁿ = e. Si G no es abeliano esto puede fallar."
  },
  {
    topic: "Cap. 7 · Grupos", ref: "Cor. 7.1.11",
    q: "Si o(G) = 15, ¿cuáles NO pueden ser órdenes de subgrupos de G?",
    options: ["6", "4", "10", "5", "3"],
    answer: [0, 1, 2],
    explain: "Por Lagrange, el orden de un subgrupo divide a 15: sólo 1, 3, 5 o 15."
  },
  {
    topic: "Cap. 7 · Grupos", ref: "Teo. 7.1.8",
    q: "Para un subgrupo H de G, ¿qué es cierto?",
    options: [
      "Cada coclase tiene el mismo cardinal que H",
      "Hay tantas coclases a izquierda como a derecha",
      "Las coclases forman una partición de G",
      "aH = Ha para todo a"
    ],
    answer: [0, 1, 2],
    explain: "aH = Ha para todo a sólo vale si H es normal."
  },
  {
    topic: "Cap. 7 · Grupos", ref: "Teo. 7.2.1",
    q: "La operación de G se induce al cociente por la congruencia a derecha módulo H si y sólo si:",
    options: ["Las congruencias a derecha y a izquierda módulo H coinciden", "H es cíclico", "H = {e}", "G es finito"],
    answer: 0,
    explain: "Es decir, si H es normal; entonces G/H es un grupo."
  },
  {
    topic: "Cap. 7 · Grupos", ref: "Teo. 7.4.7",
    q: "Si G = ⟨a⟩ es cíclico infinito, sus generadores son:",
    options: ["a y a⁻¹", "Todos los aᵏ con k ≠ 0", "Sólo a", "Los aᵖ con p primo"],
    answer: 0,
    explain: "Corresponde a ±1 en ℤ. Si o(G) = m, aᵏ genera ⇔ mcd(k, m) = 1."
  },
  {
    topic: "Cap. 7 · Grupos", ref: "Teo. 7.4.8",
    q: "Si o(a) = m, entonces aʳ = aˢ si y sólo si:",
    options: ["r ≡ s (mód m)", "r = s", "r + s = m", "m | r + s"],
    answer: 0,
    explain: "Por eso ⟨a⟩ = {e, a, …, a^(m−1)} tiene exactamente m elementos."
  },
  {
    topic: "Cap. 7 · Grupos", ref: "Ejercicio 7.13",
    q: "Sean A, B grupos y π_A : A × B → A la proyección. ¿Qué es cierto?",
    options: ["π_A es un epimorfismo", "ker(π_A) = {e_A} × B", "(A × B)/({e_A} × B) ≃ A", "π_A es un monomorfismo"],
    answer: [0, 1, 2],
    explain: "Se aplica el Primer Teorema de Isomorfismo a π_A."
  },
  {
    topic: "Cap. 7 · Grupos", ref: "Lema 7.3.5",
    q: "Si f : G → H es un homomorfismo y N ◁ G con N ⊆ ker(f), existe un único f̄ : G/N → H tal que:",
    options: ["f̄ ∘ π = f", "π ∘ f̄ = f", "f̄ = f", "f ∘ f̄ = π"],
    answer: 0,
    explain: "Es el lema de factorización: f̄([a]) = f(a) está bien definida porque N ⊆ ker(f)."
  },

  /* ---------- Cap. 8 (ampliación) ---------- */
  {
    topic: "Cap. 8 · Categorías", ref: "Obs. 8.2.2",
    q: "Si (A, B) ≠ (C, D), entonces Hom(A, B) ∩ Hom(C, D) es:",
    options: ["∅", "{id_A}", "Hom(A, D)", "No está determinado"],
    answer: 0,
    explain: "Un morfismo tiene un único dominio y un único codominio."
  },
  {
    topic: "Cap. 8 · Categorías", ref: "Ej. 8.2.6 y 8.2.7",
    q: "¿Qué descripciones de categorías son correctas?",
    options: [
      "1 tiene un único objeto y un único morfismo (su identidad)",
      "En una categoría discreta, los únicos morfismos son las identidades",
      "0 no tiene objetos ni morfismos",
      "2 tiene dos objetos y ningún morfismo"
    ],
    answer: [0, 1, 2],
    explain: "2 tiene id_A, id_B y f : A → B."
  },
  {
    topic: "Cap. 8 · Categorías", ref: "Ej. 8.2.8",
    q: "En la categoría C_P de un poset P, Hom(p, p′) tiene:",
    options: ["Un único elemento si p ⪯ p′ y ninguno si no", "Todas las funciones de p en p′", "Siempre un elemento", "Dos elementos si p ≠ p′"],
    answer: 0,
    explain: "El morfismo es el par (p, p′). La reflexividad da las identidades y la transitividad la composición."
  },
  {
    topic: "Cap. 8 · Categorías", ref: "Ej. 8.2.9 y Ejercicio 8.2",
    q: "Sobre monoides y categorías, ¿qué es cierto?",
    options: [
      "Un monoide M es una categoría con un único objeto y morfismos M",
      "Una categoría con un único objeto es un monoide",
      "La composición en C_M es la operación de M",
      "C_M tiene un objeto por cada elemento de M"
    ],
    answer: [0, 1, 2],
    explain: "C_M tiene un único objeto ⋆; los elementos de M son los morfismos ⋆ → ⋆."
  },
  {
    topic: "Cap. 8 · Categorías", ref: "Ej. 8.2.10",
    q: "En la categoría opuesta C^op, si f ∈ Hom^op(A, B) y g ∈ Hom^op(B, C), entonces g ∘^op f es:",
    options: ["f ∘ g (en C)", "g ∘ f (en C)", "f⁻¹ ∘ g⁻¹", "No está definido"],
    answer: 0,
    explain: "Se invierten las flechas y, con ellas, el orden de la composición."
  },
  {
    topic: "Cap. 8 · Categorías", ref: "Ej. 8.2.12 y 8.3.17",
    q: "Si P es un poset, la categoría opuesta C_P^op es (isomorfa a):",
    options: ["La categoría C_(P*) del poset dual", "C_P", "La categoría discreta sobre P", "Set"],
    answer: 0,
    explain: "Un morfismo x → y en C_P^op existe sii y ⪯ x, que es x ⪯* y."
  },
  {
    topic: "Cap. 8 · Categorías", ref: "Ej. 8.2.16",
    q: "En la categoría de flechas C→, los objetos son:",
    options: ["Los morfismos de C", "Los objetos de C", "Los funtores de C en C", "Los pares de objetos de C"],
    answer: 0,
    explain: "Los morfismos de C→ son cuadrados conmutativos entre esas flechas."
  },
  {
    topic: "Cap. 8 · Categorías", ref: "Ej. 8.2.18",
    q: "¿Qué afirmaciones sobre subcategorías son correctas?",
    options: ["FinSet es una subcategoría full de Set", "Ret es una subcategoría de Poset", "Ret es una subcategoría full de Poset", "Mon es una subcategoría de Set"],
    answer: [0, 1],
    explain: "Hay morfismos de posets entre retículos que no son morfismos de retículos. Mon no está en Set: sus objetos llevan la operación."
  },
  {
    topic: "Cap. 8 · Funtores", ref: "Ej. 8.4.5",
    q: "¿Cuáles funtores son fieles?",
    options: ["El funtor identidad Id_C", "La inclusión de una subcategoría", "El funtor olvido fgt : Grp → Set", "Cualquier funtor constante entre categorías con más de un morfismo"],
    answer: [0, 1, 2],
    explain: "Por el olvido fiel, Poset, Ret, Grp, Mon y Sgrp son categorías concretas."
  },
  {
    topic: "Cap. 8 · Funtores", ref: "Ej. 8.3.14",
    q: "Fijado B, el funtor hom_B(A) = Hom(A, B) es:",
    options: ["Contravariante", "Covariante", "Constante", "No es un funtor"],
    answer: 0,
    explain: "Un f : A → C induce Hom(C, B) → Hom(A, B), h ↦ h ∘ f: invierte el sentido."
  },
  {
    topic: "Cap. 8 · Funtores", ref: "Ej. 8.3.6 y Ejercicio 8.11",
    q: "¿Qué son los funtores entre categorías de posets o de monoides?",
    options: [
      "Un funtor C_P → C_Q es un morfismo de orden P → Q",
      "Un funtor C_M → C_M′ es un homomorfismo de monoides",
      "Un funtor C_P → C_Q es una biyección",
      "No existen funtores entre ellas"
    ],
    answer: [0, 1],
    explain: "Los funtores generalizan los morfismos de cada estructura."
  },
  {
    topic: "Cap. 8 · Funtores", ref: "Ej. 8.3.8",
    q: "La categoría Cat tiene como objetos:",
    options: ["Las categorías pequeñas", "Todas las categorías", "Los funtores", "Los conjuntos"],
    answer: 0,
    explain: "Tomar todas las categorías lleva a contradicciones como la paradoja de Russell. Los morfismos de Cat son funtores."
  },
  {
    topic: "Cap. 8 · Funtores", ref: "Ej. 8.3.11 y 8.3.13",
    q: "Sobre funtores contravariantes y la categoría opuesta, ¿qué es correcto?",
    options: [
      "Un funtor F : C → D^op equivale a un funtor contravariante de C en D",
      "Id* : C → C^op (A ↦ A, f ↦ f) es contravariante",
      "Todo funtor contravariante es covariante",
      "C^op tiene distintos objetos que C"
    ],
    answer: [0, 1],
    explain: "ob C^op = ob C; sólo se invierten las flechas."
  },
  {
    topic: "Cap. 8 · Categorías", ref: "Ej. 8.4.13 y 8.4.14",
    q: "¿Qué es cierto sobre morfismos mónicos?",
    options: [
      "En C_P (P poset), todo morfismo es mónico",
      "En C_M, f es mónico sii f es cancelativo a izquierda en M",
      "En C_G (G grupo), todo morfismo es mónico",
      "En C_M, ningún morfismo es mónico"
    ],
    answer: [0, 1, 2],
    explain: "En un grupo todo elemento es cancelativo."
  },
  {
    topic: "Cap. 8 · Categorías", ref: "Ej. 8.4.9 a 8.4.23",
    q: "¿Cuáles caracterizaciones son correctas?",
    options: [
      "En Grp: mónico ⇔ inyectivo",
      "En Poset: épico ⇔ sobreyectivo",
      "En Grp: épico ⇔ sobreyectivo",
      "En Mon: épico ⇔ sobreyectivo",
      "En DivGrp: mónico ⇔ inyectivo"
    ],
    answer: [0, 1, 2],
    explain: "En Sgrp y Mon hay morfismos épicos no sobreyectivos, y en DivGrp mónicos no inyectivos."
  },
  {
    topic: "Cap. 8 · Categorías", ref: "Ej. 8.4.23",
    q: "En Sgrp, la inclusión del semigrupo ((0, 1], ·) en (ℝ⁺, ·) es:",
    options: ["Épica pero no sobreyectiva", "Un isomorfismo", "No es un morfismo", "Sobreyectiva pero no épica"],
    answer: 0,
    explain: "Dos morfismos que coinciden en (0, 1] coinciden en todo ℝ⁺: un morfismo épico no tiene por qué ser sobreyectivo."
  },
  {
    topic: "Cap. 8 · Categorías", ref: "Ej. 8.4.31",
    q: "En Poset, un morfismo biyectivo:",
    options: ["No necesariamente es un isomorfismo", "Siempre es un isomorfismo", "Nunca es mónico", "Siempre es la identidad"],
    answer: 0,
    explain: "Id : (ℕ, |) → (ℕ, ≤) es biyectivo pero su inversa no preserva el orden."
  },
  {
    topic: "Cap. 8 · Categorías", ref: "Lema 8.4.2 y Obs. 8.4.12",
    q: "Sea C′ una subcategoría de C y f un morfismo de C′. ¿Qué es cierto?",
    options: ["Si f es mónico en C, es mónico en C′", "Si f es mónico en C′, es mónico en C", "Si f es épico en C, es épico en C′", "Mónico en C′ equivale a mónico en C"],
    answer: [0, 2],
    explain: "En C′ hay menos morfismos con los que componer, así que la condición es más débil (ej. DivGrp ⊆ Ab)."
  },
  {
    topic: "Cap. 8 · Categorías", ref: "Ejercicio 8.13",
    q: "Sean f y g flechas componibles de una categoría. ¿Qué es siempre cierto?",
    options: ["f, g mónicos ⇒ g ∘ f mónico", "g ∘ f mónico ⇒ f mónico", "g ∘ f épico ⇒ g épico", "g ∘ f mónico ⇒ g mónico"],
    answer: [0, 1, 2],
    explain: "De g ∘ f mónico se deduce que f es mónico, no g."
  },
  {
    topic: "Cap. 8 · Categorías", ref: "Ejercicio 8.13",
    q: "Si f y g son isomorfismos componibles, (g ∘ f)⁻¹ es:",
    options: ["f⁻¹ ∘ g⁻¹", "g⁻¹ ∘ f⁻¹", "g ∘ f", "f ∘ g"],
    answer: 0,
    explain: "(g ∘ f) ∘ (f⁻¹ ∘ g⁻¹) = g ∘ g⁻¹ = id."
  },
  {
    topic: "Cap. 8 · Categorías", ref: "Ejercicio 8.18",
    q: "f ∈ Hom_C(A, B) es mónico si y sólo si, como morfismo de C^op (de B en A), es:",
    options: ["Épico", "Mónico", "Un isomorfismo", "La identidad"],
    answer: 0,
    explain: "Dualidad: mónico ↔ épico, inicial ↔ terminal; los isomorfismos se conservan."
  },
  {
    topic: "Cap. 8 · Funtores", ref: "Ejercicio 8.17",
    q: "Si F : C → D es un funtor y f es un isomorfismo en C, entonces:",
    options: ["F(f) es un isomorfismo", "F(f) es la identidad", "F(f) no es necesariamente mónico", "f = F(f)"],
    answer: 0,
    explain: "F(f⁻¹) es el inverso de F(f). La recíproca es falsa, incluso con F fiel (pero vale con F fiel y full)."
  },
  {
    topic: "Cap. 8 · Funtores", ref: "Ejercicio 8.12",
    q: "F : Rel → Rel^op con F(A) = A y F(R) = R⁻¹ es:",
    options: ["Un isomorfismo de categorías", "Un funtor no fiel", "No es un funtor", "Un funtor constante"],
    answer: 0,
    explain: "Invertir relaciones invierte el orden de composición: (S ∘ R)⁻¹ = R⁻¹ ∘ S⁻¹."
  },
  {
    topic: "Cap. 8 · Funtores", ref: "Lema 8.3.10 y Lema 8.3.15",
    q: "¿Qué hacen los funtores con los diagramas conmutativos?",
    options: [
      "Un funtor covariante los lleva en diagramas conmutativos",
      "Uno contravariante los lleva en diagramas conmutativos con las flechas invertidas",
      "Los funtores no preservan la conmutatividad",
      "Sólo los funtores fieles los preservan"
    ],
    answer: [0, 1],
    explain: "Es consecuencia de F(g ∘ f) = F(g) ∘ F(f) (o F(f) ∘ F(g) en el caso contravariante)."
  },
  {
    topic: "Cap. 8 · Categorías", ref: "Teo. 8.4.28 y 8.4.29",
    q: "¿Cuáles caracterizaciones de isomorfismo son correctas?",
    options: [
      "En Set: isomorfismo ⇔ función biyectiva",
      "En Grp: isomorfismo ⇔ isomorfismo de grupos",
      "En Poset: isomorfismo ⇔ morfismo biyectivo",
      "En Ret: isomorfismo ⇔ isomorfismo de retículos"
    ],
    answer: [0, 1, 3],
    explain: "En Poset hay morfismos biyectivos que no son isomorfismos."
  },

  /* ---------- Cap. 9 (ampliación) ---------- */
  {
    topic: "Cap. 9 · Construcciones", ref: "Ej. 9.1.2",
    q: "En Set, ¿qué es cierto?",
    options: ["∅ es el único objeto inicial", "Todo conjunto de un elemento es terminal", "∅ es terminal", "Set tiene un objeto nulo"],
    answer: [0, 1],
    explain: "No hay funciones de un conjunto no vacío en ∅, así que ∅ no es terminal."
  },
  {
    topic: "Cap. 9 · Construcciones", ref: "Ej. 9.1.3 y 9.1.6",
    q: "¿En cuáles categorías el objeto indicado es un objeto nulo?",
    options: ["El grupo trivial {e} en Grp", "{0} en Vect", "∅ en Set", "ℤ en Grp"],
    answer: [0, 1],
    explain: "Desde y hacia el grupo trivial (o el espacio {0}) hay un único morfismo."
  },
  {
    topic: "Cap. 9 · Construcciones", ref: "Ej. 9.1.4",
    q: "En la categoría Boole, el objeto inicial es:",
    options: ["El álgebra de Boole {0, 1}", "P(ℕ)", "El álgebra de un elemento", "No existe"],
    answer: 0,
    explain: "El único morfismo {0, 1} → B′ manda 0 ↦ 0′ y 1 ↦ 1′."
  },
  {
    topic: "Cap. 9 · Construcciones", ref: "Ej. 9.1.5, 9.2.6 y 9.2.14",
    q: "En la categoría C_P de un poset P, ¿qué es cierto?",
    options: [
      "Hay objeto inicial ⇔ P tiene mínimo",
      "El producto de x e y es ínf{x, y}",
      "El coproducto de x e y es sup{x, y}",
      "C_P siempre tiene todos los productos"
    ],
    answer: [0, 1, 2],
    explain: "Los productos existen sólo si existen los ínfimos: C_P tiene productos y coproductos ⇔ P es retículo."
  },
  {
    topic: "Cap. 9 · Construcciones", ref: "Ej. 9.2.14",
    q: "C_P tiene productos y coproductos binarios si y sólo si P es:",
    options: ["Un retículo", "Totalmente ordenado", "Finito", "Bien ordenado"],
    answer: 0,
    explain: "Producto = ínfimo y coproducto = supremo de cada par."
  },
  {
    topic: "Cap. 9 · Construcciones", ref: "Ej. 9.2.24",
    q: "C_L tiene productos y coproductos arbitrarios si y sólo si L es:",
    options: ["Un retículo completo", "Un retículo finito", "Un álgebra de Boole", "Distributivo"],
    answer: 0,
    explain: "Completo: todo subconjunto tiene ínfimo y supremo."
  },
  {
    topic: "Cap. 9 · Construcciones", ref: "Ej. 9.2.15, 9.2.16 y 9.2.17",
    q: "¿Cuáles descripciones de coproductos son correctas?",
    options: [
      "En Set: la unión disjunta",
      "En Ab: la suma directa A ⊕ B con las inclusiones",
      "En Grp: el producto libre",
      "En Grp: el producto directo A × B"
    ],
    answer: [0, 1, 2],
    explain: "En Grp, [f, g](a, b) = f(a)g(b) no es homomorfismo si los grupos no conmutan."
  },
  {
    topic: "Cap. 9 · Construcciones", ref: "Ej. 9.3.2",
    q: "En Set, el ecualizador de f, g : X → Y es:",
    options: ["{x ∈ X : f(x) = g(x)} con la inclusión", "X × Y con las proyecciones", "Y cocientado por f(x) ∼ g(x)", "La imagen de f"],
    answer: 0,
    explain: "Lo mismo vale en Poset, Sgrp, Mon y Grp con la estructura restringida."
  },
  {
    topic: "Cap. 9 · Construcciones", ref: "Ej. 9.3.9",
    q: "En Set, el coecualizador de f, g : A → B es:",
    options: [
      "B/∼, con ∼ la menor equivalencia que contiene a los pares (f(a), g(a))",
      "{a ∈ A : f(a) = g(a)}",
      "A ⊔ B",
      "B con la identidad"
    ],
    answer: 0,
    explain: "q : B → B/∼ es la proyección al cociente, con q ∘ f = q ∘ g."
  },
  {
    topic: "Cap. 9 · Construcciones", ref: "Ej. 9.3.10",
    q: "En Grp, el coecualizador de f, g : G → H es H/N, donde N es:",
    options: ["La clausura normal de {f(x)g(x)⁻¹ : x ∈ G}", "ker(f)", "H", "El centro de H"],
    answer: 0,
    explain: "N es el menor subgrupo normal que contiene a esos elementos."
  },
  {
    topic: "Cap. 9 · Construcciones", ref: "Ej. 9.4.2, 9.4.3 y 9.4.11",
    q: "¿Qué construcciones son casos particulares de límites?",
    options: ["Los ecualizadores", "Los productos", "Los pullbacks", "Los coproductos"],
    answer: [0, 1, 2],
    explain: "Coproductos, coecualizadores y pushouts son colímites."
  },
  {
    topic: "Cap. 9 · Construcciones", ref: "Ejercicios 9.9 y 9.10",
    q: "Un límite para un diagrama D es:",
    options: ["Un objeto terminal de la categoría de conos Cone(D)", "Un objeto inicial de Cone(D)", "Cualquier cono", "Un coproducto"],
    answer: 0,
    explain: "Dualmente, un colímite es un objeto inicial en la categoría de coconos."
  },
  {
    topic: "Cap. 9 · Construcciones", ref: "Ej. 9.4.4 y Teo. 9.4.7",
    q: "Sobre conos y límites de un diagrama D, ¿qué es cierto?",
    options: [
      "Un límite, si existe, es único salvo isomorfismo",
      "Un cono no necesariamente es único salvo isomorfismo",
      "Todo diagrama tiene límite",
      "Todo cono es un límite"
    ],
    answer: [0, 1],
    explain: "Hay diagramas sin límite: por ejemplo, si no existe el producto de dos objetos."
  },
  {
    topic: "Cap. 9 · Construcciones", ref: "Ej. 9.4.5 y 9.4.12",
    q: "El pullback de f : A → C y g : B → C es:",
    options: ["El límite del diagrama A → C ← B", "El colímite de A ← C → B", "El coproducto A + B", "El ecualizador de f y g"],
    answer: 0,
    explain: "El pushout es el dual: el colímite de A ← C → B."
  },
  {
    topic: "Cap. 9 · Construcciones", ref: "Ejercicios 9.6 y 9.7",
    q: "En una categoría con productos y objeto terminal 1, ¿qué es cierto?",
    options: ["⟨π₁, π₂⟩ = id", "A × B ≅ B × A", "A × 1 ≅ A", "A × 1 ≅ 1"],
    answer: [0, 1, 2],
    explain: "También A × (B × C) ≅ (A × B) × C."
  },
  {
    topic: "Cap. 9 · Construcciones", ref: "Ej. 9.2.8",
    q: "En Set, si f : A → C y g : B → D, el morfismo producto f × g es:",
    options: ["(a, b) ↦ (f(a), g(b))", "(a, b) ↦ (g(a), f(b))", "a ↦ (f(a), g(a))", "(a, b) ↦ f(a)"],
    answer: 0,
    explain: "En general f × g = ⟨f ∘ π_A, g ∘ π_B⟩."
  },
  {
    topic: "Cap. 9 · Construcciones", ref: "Ej. 9.5.6",
    q: "¿Cuáles son categorías cartesianas cerradas?",
    options: ["Set", "Poset", "C_B, para B un álgebra de Boole", "La categoría 0"],
    answer: [0, 1, 2],
    explain: "La categoría vacía no tiene objeto terminal."
  },
  {
    topic: "Cap. 9 · Construcciones", ref: "Ej. 9.5.7",
    q: "En C_B (B un álgebra de Boole), el exponencial xʸ es:",
    options: ["yᶜ ∨ x", "x ∧ y", "x ∨ y", "xᶜ ∧ y"],
    answer: 0,
    explain: "Es la \"implicación\" y → x: z ∧ y ⪯ x ⇔ z ⪯ yᶜ ∨ x."
  },
  {
    topic: "Cap. 9 · Construcciones", ref: "Ej. 9.5.2",
    q: "En Poset, el exponencial Bᴬ es:",
    options: ["Hom(A, B) con el orden puntual", "A × B", "P(A × B)", "B"],
    answer: 0,
    explain: "f ⪯ g ⇔ f(a) ⪯ g(a) para todo a, y eval(f, a) = f(a)."
  },
  {
    topic: "Cap. 9 · Construcciones", ref: "Ejercicios 9.12 y 9.13",
    q: "En una categoría cartesiana cerrada, ¿qué es cierto?",
    options: ["curry(eval) = id_(Bᴬ)", "1ᴬ ≅ 1", "B¹ ≅ B", "Bᴬ ≅ A × B"],
    answer: [0, 1, 2],
    explain: "Además Bᴬ es único salvo isomorfismo."
  },
  {
    topic: "Cap. 9 · Construcciones", ref: "Ej. 9.3.4",
    q: "En la categoría C_G de un grupo G (un único objeto), los ecualizadores:",
    options: ["No siempre existen", "Siempre existen", "Son siempre la identidad", "Coinciden con los coproductos"],
    answer: 0,
    explain: "f ∘ h = g ∘ h implica f = g en un grupo; si f ≠ g, no hay ningún h."
  },
  {
    topic: "Cap. 9 · Construcciones", ref: "Lema 9.3.11",
    q: "Si (X, e) es un ecualizador y e además es épico, entonces e es:",
    options: ["Un isomorfismo", "Cero", "No mónico", "Un coproducto"],
    answer: 0,
    explain: "e siempre es mónico; un ecualizador mónico y épico es iso. Dualmente para coecualizadores."
  },
  {
    topic: "Cap. 9 · Construcciones", ref: "Ejercicio 9.14",
    q: "En una categoría con coproductos y objeto terminal 1, Bool = 1 + 1, donde true y false son:",
    options: ["Las inclusiones i₁, i₂ : 1 → 1 + 1", "Las proyecciones", "Dos objetos iniciales", "Los morfismos identidad"],
    answer: 0,
    explain: "Así not se define como [false, true] : Bool → Bool."
  },
  {
    topic: "Cap. 9 · Construcciones", ref: "Ejercicio 9.5",
    q: "Si u, v : S → A × B cumplen π_A ∘ u = π_A ∘ v y π_B ∘ u = π_B ∘ v, entonces:",
    options: ["u = v", "u y v pueden ser distintos", "u = π_A", "S es terminal"],
    answer: 0,
    explain: "Por la unicidad de la propiedad universal: ambos son ⟨π_A ∘ u, π_B ∘ u⟩."
  },

  /* ---------- Cap. 10 (ampliación) ---------- */
  {
    topic: "Cap. 10 · Equivalencias y adjunciones", ref: "Ej. 10.1.5",
    q: "Si η : F → G y τ : G → H son transformaciones naturales, (τ ∘ η)_A es:",
    options: ["τ_A ∘ η_A", "η_A ∘ τ_A", "τ_A", "F(τ_A)"],
    answer: 0,
    explain: "El rectángulo formado por los dos cuadrados de naturalidad conmuta."
  },
  {
    topic: "Cap. 10 · Equivalencias y adjunciones", ref: "Ej. 10.1.2, 10.1.3 y 10.1.6",
    q: "Sobre transformaciones naturales, ¿qué es correcto?",
    options: [
      "id_F (con (id_F)_A = id_F(A)) es un isomorfismo natural de F en F",
      "Los funtores C → D con las transformaciones naturales forman la categoría Dᶜ",
      "A × − y − × A son naturalmente isomorfos",
      "Toda transformación natural es un isomorfismo natural"
    ],
    answer: [0, 1, 2],
    explain: "Para A × B → B × A se usa η_B = ⟨π_B, π_A⟩."
  },
  {
    topic: "Cap. 10 · Equivalencias y adjunciones", ref: "Ej. 10.1.7",
    q: "En Cat, la categoría de funtores C¹ (con 1 la categoría de un objeto) es isomorfa a:",
    options: ["C", "1", "0", "C^op"],
    answer: 0,
    explain: "Un funtor 1 → C es elegir un objeto de C, y una transformación natural es elegir un morfismo."
  },
  {
    topic: "Cap. 10 · Equivalencias y adjunciones", ref: "Ej. 10.2.6 y Teo. 10.2.3",
    q: "La categoría 1 y la categoría con dos objetos isomorfos A ⇄ B (f y g inversos) son:",
    options: ["Equivalentes pero no isomorfas", "Isomorfas", "Ni equivalentes ni isomorfas", "Iguales"],
    answer: 0,
    explain: "Isomorfas ⇒ equivalentes, pero no al revés: A y B no \"modelan\" nada nuevo."
  },
  {
    topic: "Cap. 10 · Equivalencias y adjunciones", ref: "Obs. 10.2.8 y Ejercicio 10.4",
    q: "Sobre los esqueletos de una categoría C, ¿qué es cierto?",
    options: [
      "Dos objetos distintos de un esqueleto no son isomorfos",
      "Dos esqueletos de C son categorías isomorfas",
      "Todo objeto de C es isomorfo a un objeto del esqueleto",
      "El esqueleto contiene todos los objetos de C"
    ],
    answer: [0, 1, 2],
    explain: "Se elige un representante por clase de isomorfismo."
  },
  {
    topic: "Cap. 10 · Equivalencias y adjunciones", ref: "Obs. 10.2.12",
    q: "Para probar que toda categoría tiene esqueleto (y la recíproca del Lema 10.2.5) se necesita:",
    options: ["Una versión fuerte del axioma de elección", "El Lema de Yoneda", "Que la categoría sea finita", "Nada adicional"],
    answer: 0,
    explain: "Hay que elegir un objeto de cada clase de isomorfismo."
  },
  {
    topic: "Cap. 10 · Equivalencias y adjunciones", ref: "Lema 10.2.2",
    q: "La relación \"ser categorías equivalentes\" es:",
    options: ["Reflexiva", "Simétrica", "Transitiva", "Antisimétrica"],
    answer: [0, 1, 2],
    explain: "Categorías equivalentes distintas existen (por ejemplo, el Ej. 10.2.6), así que no es antisimétrica."
  },
  {
    topic: "Cap. 10 · Equivalencias y adjunciones", ref: "Lema 10.2.5",
    q: "Si F : C → D define una equivalencia, F es:",
    options: ["Fiel", "Full", "Esencialmente sobreyectivo en objetos", "Biyectivo en objetos"],
    answer: [0, 1, 2],
    explain: "Biyectivo en objetos corresponde a un isomorfismo, no a una equivalencia."
  },
  {
    topic: "Cap. 10 · Equivalencias y adjunciones", ref: "Ej. 10.3.3",
    q: "Vista entre las categorías C_P y C_Q, una conexión de Galois (F, G) entre posets es:",
    options: ["Una adjunción", "Una equivalencia siempre", "Un isomorfismo de categorías", "Una mónada"],
    answer: 0,
    explain: "F(x) ⪯ y ⇔ x ⪯ G(y) es la biyección Hom(F(x), y) ≅ Hom(x, G(y))."
  },
  {
    topic: "Cap. 10 · Equivalencias y adjunciones", ref: "Ej. 10.3.6 y Ejercicio 10.10",
    q: "En una categoría con productos y exponenciales, − × A es adjunto a izquierda de:",
    options: ["(−)ᴬ", "A × −", "El funtor identidad", "El funtor constante en A"],
    answer: 0,
    explain: "Hom(X × A, Y) ≅ Hom(X, Yᴬ); la counidad es eval."
  },
  {
    topic: "Cap. 10 · Equivalencias y adjunciones", ref: "Lema 10.3.2 y Teo. 10.3.7",
    q: "Sobre adjunciones, ¿qué es correcto?",
    options: [
      "Toda equivalencia de categorías define una adjunción",
      "Si F ⊣ G, Hom(X, G(Y)) ≅ Hom(F(X), Y) para todo X, Y",
      "Toda adjunción es una equivalencia",
      "Los adjuntos a izquierda preservan productos siempre"
    ],
    answer: [0, 1],
    explain: "Los adjuntos a izquierda preservan colímites (coproductos), no productos."
  },
  {
    topic: "Cap. 10 · Mónadas", ref: "Ej. 10.4.2 y Teo. 10.4.4",
    q: "Sobre mónadas y adjunciones, ¿qué es cierto?",
    options: [
      "Si F ⊣ G, T = G ∘ F es una mónada",
      "Toda mónada proviene de una adjunción",
      "La categoría de Kleisli es objeto inicial de Adj(C, T)",
      "La categoría de Eilenberg-Moore es objeto inicial de Adj(C, T)"
    ],
    answer: [0, 1, 2],
    explain: "Eilenberg-Moore es el objeto terminal de Adj(C, T)."
  },
  {
    topic: "Cap. 10 · Mónadas", ref: "Ej. 10.4.3",
    q: "En la mónada de partes T(X) = P(X) sobre Set:",
    options: ["η_A(a) = {a}", "μ_A une los conjuntos de una familia", "η_A(a) = A", "μ_A interseca los conjuntos de la familia"],
    answer: [0, 1],
    explain: "Por ejemplo, μ({{a}, {b}, {a, b}}) = {a, b}."
  },
  {
    topic: "Cap. 10 · Mónadas", ref: "Ejercicio 10.18",
    q: "En la categoría de Kleisli C_T de una mónada T, Hom_(C_T)(A, B) es:",
    options: ["Hom_C(A, T(B))", "Hom_C(T(A), B)", "Hom_C(A, B)", "Hom_C(T(A), T(B))"],
    answer: 0,
    explain: "Los objetos son los de C; los morfismos A → B son morfismos A → T(B) en C."
  },
  {
    topic: "Cap. 10 · Mónadas", ref: "Ejercicio 10.13",
    q: "Si T es una mónada sobre un poset P visto como categoría, para todo x:",
    options: ["x ⪯ T(x)", "T(T(x)) = T(x)", "T(x) ⪯ x", "T(x) = x siempre"],
    answer: [0, 1],
    explain: "La unidad da x ⪯ T(x) y la multiplicación T(T(x)) ⪯ T(x): T es un operador clausura."
  },
  {
    topic: "Cap. 10 · Lema de Yoneda", ref: "Ej. 10.5.2",
    q: "Aplicado a la categoría C_G de un grupo, el Lema de Yoneda da:",
    options: ["El Teorema de Cayley: todo grupo es isomorfo a un grupo de biyecciones", "El Teorema de Lagrange", "El Primer Teorema de Isomorfismo", "Que todo grupo es abeliano"],
    answer: 0,
    explain: "Nat(hom_⋆, hom_⋆) ≅ hom_⋆(⋆) = G, y esas transformaciones naturales son biyecciones de G."
  },
  {
    topic: "Cap. 10 · Equivalencias y adjunciones", ref: "Ejercicio 10.5",
    q: "Si F : C → D es fiel y full, entonces f es un isomorfismo en C si y sólo si:",
    options: ["F(f) es un isomorfismo en D", "F(f) es mónico", "F(f) es la identidad", "f es épico"],
    answer: 0,
    explain: "Sin \"full\" la recíproca falla (Ejercicio 8.17)."
  },
  {
    topic: "Cap. 10 · Equivalencias y adjunciones", ref: "Ejercicio 10.7",
    q: "El funtor F : Sgrp → Mon que agrega un neutro, F(S) = S ⊔ {e}, es adjunto de:",
    options: ["La inclusión inc : Mon → Sgrp", "El funtor olvido a Set", "El funtor identidad de Sgrp", "Ningún funtor"],
    answer: 0,
    explain: "Un morfismo de semigrupos S → M se extiende de forma única a un morfismo de monoides S ⊔ {e} → M."
  },
  {
    topic: "Cap. 10 · Equivalencias y adjunciones", ref: "Teo. 10.2.17 y Obs. 10.3.11",
    q: "Una equivalencia de categorías F : C → D:",
    options: ["Preserva las estructuras categóricas (productos, límites, etc.)", "Admite adjuntos a izquierda y a derecha", "Es necesariamente un isomorfismo", "No preserva objetos iniciales"],
    answer: [0, 1],
    explain: "Las equivalencias son \"isomorfismos salvo objetos isomorfos\"."
  },
  {
    topic: "Cap. 10 · Mónadas", ref: "Ejercicio 10.16",
    q: "Si una semi-mónada (M, μ) se extiende a una mónada mediante η, entonces η:",
    options: ["Es única", "Puede no ser única", "Es la identidad", "No es natural"],
    answer: 0,
    explain: "Si η y η′ funcionan, las leyes de unidad fuerzan η = η′."
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = BYTE_RUN_QUESTIONS;
  module.exports.CHAPTERS = BYTE_RUN_CHAPTERS;
}
