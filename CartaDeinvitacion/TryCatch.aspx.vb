Public Class TryCatch
    Inherits System.Web.UI.Page

    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load

    End Sub
    Private Function DividirNumero(number As Decimal, divisor As Decimal) As Decimal
        If divisor = 0 Then
            Dim err As New DivideByZeroException("debe suministrar  un numero que no sea 0")
            Throw err
        End If
        Return number / divisor
    End Function

    Protected Sub btncmd_Click(sender As Object, e As EventArgs) Handles btncmd.Click
        Trace.IsEnabled = True
        Try
            DividirNumero(5, 1)
        Catch ex As Exception
            Trace.Write("cmd_Error", "Caught Error , err")
        End Try
    End Sub
End Class