Public Class AtraparError
    Inherits System.Web.UI.Page

    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load

    End Sub

    Protected Sub btndividir_Click(sender As Object, e As EventArgs) Handles btndividir.Click
        Try
            Dim A, B, Resultado As Decimal
            A = Decimal.Parse(txtA.Text)
            B = Decimal.Parse(txtB.Text)
            Resultado = A / B
            lblresultado.Text = Resultado.ToString()
            lblresultado.ForeColor = System.Drawing.Color.Black
        Catch ex As Exception
            lblresultado.Text = "<b>Message:</b>" & ex.Message & "<br/>"
            lblresultado.Text &= "<b > Source:</b > " & ex.Source & " < br /> < br />"
            lblresultado.Text &= "<b > Stack Trace:</b> " & ex.StackTrace
            lblresultado.ForeColor = System.Drawing.Color.Red
        End Try
    End Sub
End Class