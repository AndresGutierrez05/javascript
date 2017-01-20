Public Class Producto
    Inherits System.Web.UI.Page

    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
        Dim ProductoVenta As New Producto1("anime desconocido", 19.99, "anime-wallpaper-1.png")
        Response.Write(ProductoVenta.LlenarHtml())
        Response.Write(ProductoVenta.numero())
    End Sub

End Class

Partial Public Class Producto1

    Public _nombre As String
    Public _precio As Decimal
    Public _imagen As String

    Public Property Nombre() As String
        Get
            Return _nombre
        End Get
        Set(value As String)
            _nombre = value
        End Set
    End Property

    Public Property Precio() As Decimal
        Get
            Return _precio
        End Get
        Set(value As Decimal)
            _precio = value
        End Set
    End Property

    Public Property Imagen() As String
        Get
            Return _imagen
        End Get
        Set(value As String)
            _imagen = value
        End Set
    End Property

    Public Sub New(Nombre As String, Precio As Decimal, Imagen As String)
        ' TODO: Complete member initialization 
        Me._nombre = Nombre
        Me._precio = Precio
        Me._imagen = Imagen
    End Sub

    Function numero() As String
        Dim numero1 As Integer = 5
        If numero1 > 2 Then
            Return "no es mayor"
        Else
            Return "si es mayor"
        End If

    End Function

End Class

Partial Public Class Producto1
    Public Function LlenarHtml() As String
        Dim StringaLLenar As String = "<h1>" & _nombre & "</h1><br/>" & "<h3> Costs: " & _precio.ToString() & "</h3>  <br />" & "<img src='" & _imagen & "' />"
        Return StringaLLenar
    End Function

End Class
