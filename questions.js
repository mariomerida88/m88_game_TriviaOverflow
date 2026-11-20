/*
 * Byte Run - banco de preguntas.
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
 * Cada partida usa 8 preguntas al azar.
 */
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
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = BYTE_RUN_QUESTIONS;
}
