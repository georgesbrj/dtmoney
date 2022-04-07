import { Container } from "./styles";


export function TransactionsTable (){
return (
  <Container>
      <table>
          <thead>
              <tr>
                  <th>Titulo</th>
                  <th>Valor</th>
                  <th>Categoria</th>
                  <th>Data</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td>Desenvolvimento de website</td>
                  <td className="deposit" >R$12.0000</td>
                  <td>Desenvolvimento</td>
                  <td>28/02/2022</td>
              </tr>
              <tr>
                  <td>Desenvolvimento de website</td>
                  <td className="withdraw">-R$2.0000</td>
                  <td>Desenvolvimento</td>
                  <td>28/02/2022</td>
              </tr>             
          </tbody>
      </table>
  </Container>    
);
}