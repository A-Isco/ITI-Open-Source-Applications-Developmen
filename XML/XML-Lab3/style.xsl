<?xml version="1.0" encoding="ISO-8859-1"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
    <html>
    <body>
        <table border="1">
            <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>address</th>
                <th>email</th>
            </tr>
            <xsl:for-each select="emps/employee">
            <tr>
                <td><xsl:value-of select="name"/></td>
                <!--<td><xsl:for-each select="phone">
                    
                </xsl:for-each></td>-->
                <td><xsl:value-of select="phone"/>, <xsl:value-of select="phone/@type"/></td>
                <td><xsl:value-of select="address"/></td>
                <td><xsl:value-of select="email"/></td>
            </tr>
            </xsl:for-each>
        </table>
    </body>
    </html>
</xsl:template>
</xsl:stylesheet>
