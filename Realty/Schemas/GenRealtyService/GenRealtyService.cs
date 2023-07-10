using System;
using System.ServiceModel;
using System.ServiceModel.Activation;
using System.ServiceModel.Web;
using System.Web.SessionState;
using Terrasoft.Core.DB;
using Terrasoft.Web.Common;

namespace Terrasoft.Configuration
{
    [ServiceContract]
    [AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Required)]
    public class RealtyService : BaseService, IReadOnlySessionState
    {
        [OperationContract]
        [WebInvoke(Method = "POST", BodyStyle = WebMessageBodyStyle.Wrapped,
            RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json)]
        public decimal GetTotalAmountByTypeAndOffer(string realtyTypeId, string realtyOfferId)
        {
            if (!Guid.TryParse(realtyTypeId, out var parsedRealtyTypeId)) throw new Exception("Bad realty type Id");
            if (!Guid.TryParse(realtyOfferId, out var parsedRealtyOfferId)) throw new Exception("Bad realty offer Id");

            var select = new Select(UserConnection)
                .Column(Func.Sum("GenPrice"))
                .From("GenRealtySection")
                .Where("GenTypeId").IsEqual(Column.Parameter(parsedRealtyTypeId))
                .And("GenOfferTypeId").IsEqual(Column.Parameter(parsedRealtyOfferId))
                as Select;

            var result = select.ExecuteScalar<decimal>();

            return result;
        }
    }
}