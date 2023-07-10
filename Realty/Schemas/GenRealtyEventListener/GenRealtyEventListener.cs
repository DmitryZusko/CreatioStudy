using System;
using Terrasoft.Core.Entities;
using Terrasoft.Core.Entities.Events;

namespace Terrasoft.Configuration
{
    [EntityEventListener(SchemaName = "GenRealtySection")]
    public class RealtyEntityEventListener : BaseEntityEventListener
    {
        public RealtyEntityEventListener()
        {
        }

        public override void OnInserting(object sender, EntityBeforeEventArgs e)
        {
            base.OnInserting(sender, e);

            var realty = (Entity)sender;
            var price = realty.GetTypedColumnValue<decimal>("GenPrice");
            if (price < 1_000_000_000) return;

            e.IsCanceled = true;
            var messageTemplate = realty.UserConnection.GetLocalizableString("GenRealtyEventListener", "GenTooBigValueMsg");
            throw new Exception(string.Format(messageTemplate, "$1,000,000,000"));
        }
    }
}