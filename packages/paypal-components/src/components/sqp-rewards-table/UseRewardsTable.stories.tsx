import { setProgramId, setUserIdentity } from "@saasquatch/component-boilerplate";
import { useEffect } from "@saasquatch/universal-hooks";
import { h } from "@stencil/core";
import { createHookStory } from "../sqp-stencilbook/HookStoryAddon";

export default {
  title: "Hooks / useRewardsTable",
};

function setupGraphQL() {
  const id = "testestest";
  const accountId = id;

  //@ts-ignore
  window.widgetIdent = {
    tenantAlias: "test_a8b41jotf8a1v",
    appDomain: "https://staging.referralsaasquatch.com",
    // programId,
  };
  useEffect(() => {
    setUserIdentity({
      accountId,
      id,
      jwt: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImFjY291bnRJZCI6InRlc3Rlc3Rlc3QiLCJpZCI6InRlc3Rlc3Rlc3QifX0.qYnU5hNeIj9C_G3NogfG7btgCPGZC7JRXY0MG6a63zs",
    });
    return () => {
      window.widgetIdent = undefined;
      setUserIdentity(undefined);
    };
  }, []);

  return { id, accountId };
}

function setupGraphQLKlip({ token, id }) {
  const accountId = id;
  // const programId = "klip-referral-program";

  //@ts-ignore
  window.widgetIdent = {
    tenantAlias: "test_a74miwdpofztj",
    appDomain: "https://staging.referralsaasquatch.com",
    // programId,
  };
  useEffect(() => {
    setUserIdentity({
      accountId,
      id,
      jwt: token,
    });
    return () => {
      window.widgetIdent = undefined;
      setUserIdentity(undefined);
    };
  }, []);

  return { id, accountId };
}

export const RewardTableDemoHook = createHookStory(() => {
  // setupGraphQL();
  // setProgramId("sam-partner-test-2");
  const props = {
    listType: "",
    render: () => {},
    disconnectedCallback: () => {},
    ignored: true,
  };
  return (
    <sqp-rewards-table per-page="4">
    <sqp-rewards-table-reward-column></sqp-rewards-table-reward-column>
    <sqp-rewards-table-source-column></sqp-rewards-table-source-column>
    <sqp-rewards-table-status-column></sqp-rewards-table-status-column>
    <sqp-rewards-table-date-column></sqp-rewards-table-date-column>
  </sqp-rewards-table>
  );
});
export const RewardsTableWithProgram = createHookStory(() => {
  setupGraphQL();
  setProgramId("sam-partner-test-2");
  const props = {
    listType: "",
    render: () => {},
    disconnectedCallback: () => {},
    ignored: true,
  };
  return (
    <sqp-rewards-table>
      <sqp-rewards-table-reward-column></sqp-rewards-table-reward-column>
      <sqp-rewards-table-status-column></sqp-rewards-table-status-column>
      <sqp-rewards-table-source-column></sqp-rewards-table-source-column>
      <sqp-rewards-table-date-column></sqp-rewards-table-date-column>
    </sqp-rewards-table>
  );
});

export const RewardsTableNoProgram = createHookStory(() => {
  setupGraphQL();
  setProgramId(undefined);
  const props = {
    listType: "",
    render: () => {},
    disconnectedCallback: () => {},
    ignored: true,
  };
  return (
    <sqp-rewards-table>
      <sqp-rewards-table-reward-column></sqp-rewards-table-reward-column>
      <sqp-rewards-table-status-column></sqp-rewards-table-status-column>
      <sqp-rewards-table-source-column></sqp-rewards-table-source-column>
      <sqp-rewards-table-date-column></sqp-rewards-table-date-column>
    </sqp-rewards-table>
  );
});

export const RewardsTableEn = createHookStory(() => {
  setupGraphQLKlip({
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImFjY291bnRJZCI6InNhbWVuZ2xpc2giLCJpZCI6InNhbWVuZ2xpc2gifX0._6OTVF3gcipu_ibgthUNr5UHwC-2E_lhCENI5HpYvcw",
    id: "samenglish",
  });
  setProgramId(undefined);
  const props = {
    listType: "",
    render: () => {},
    disconnectedCallback: () => {},
    ignored: true,
  };
  return (
    <sqp-rewards-table per-page="4">
      <sqp-rewards-table-reward-column></sqp-rewards-table-reward-column>
      <sqp-rewards-table-status-column></sqp-rewards-table-status-column>
      <sqp-rewards-table-source-column></sqp-rewards-table-source-column>
      <sqp-rewards-table-date-column></sqp-rewards-table-date-column>
    </sqp-rewards-table>
  );
});

export const RewardsTableTr = createHookStory(() => {
  setupGraphQLKlip({
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImFjY291bnRJZCI6InNhbXR1cmtleSIsImlkIjoic2FtdHVya2V5In19.usSMe0RWg8W5FtwcvJayvAlxTw6vMxjTyWXaP8jI8_U",
    id: "samturkey",
  });
  setProgramId(undefined);
  const props = {
    listType: "",
    render: () => {},
    disconnectedCallback: () => {},
    ignored: true,
  };
  return (
    <sqp-rewards-table
      per-page="4"
      more-label="Daha"
      prev-label="Öncesi"
      empty-state-text="Henüz Referans Yok"
    >
      <sqp-rewards-table-reward-column
        column-title="Ödüller"
        redeemed-text="{redeemedAmount} kullanıldı"
        available-text="{availableAmount} mevcut"
      ></sqp-rewards-table-reward-column>
      <sqp-rewards-table-source-column
        column-title="Kullanıcılar"
        anonymous-user="Anonim Kullanıcı"
        deleted-user="Silinmiş Kullanıcı"
        reward-exchange-text="Ödülleri Kulannın"
        referral-text="{rewardSource, select, FRIEND_SIGNUP {Referans} REFERRED {Yönlendiren} other {}}"
        reward-source-text="{rewardSource, select, MANUAL {Manuel} AUTOMATED {Otomatik} other {}}"
      ></sqp-rewards-table-source-column>
      <sqp-rewards-table-status-column
        column-title="Statut"
        status-text="{status, select, AVAILABLE {Mevcut} PENDING {Bekleniyor} EXPIRED {Geçmiş} REDEEMED {Kullanılmış} CANCELED {İptal Edildi} other {Kullanılamaz} }"
        expiry-text="Bitiyor "
      ></sqp-rewards-table-status-column>
      <sqp-rewards-table-date-column column-title="Tarih"></sqp-rewards-table-date-column>
    </sqp-rewards-table>
  );
});

export const RewardsTableFr = createHookStory(() => {
  setupGraphQLKlip({
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImFjY291bnRJZCI6InNhbWZyZW5jaCIsImlkIjoic2FtZnJlbmNoIn19.cwhasHpfU5MLV4vGbCQcazb6p19iSw5pD2zyrVHgePg",
    id: "samfrench",
  });
  setProgramId(undefined);
  const props = {
    listType: "",
    render: () => {},
    disconnectedCallback: () => {},
    ignored: true,
  };
  return (
    <sqp-rewards-table
      per-page="4"
      more-label="Plus"
      prev-label="Précédent"
      empty-state-text="Aucune Récompenses Maintenant"
    >
      <sqp-rewards-table-reward-column
        column-title="Récompenses"
        redeemed-text="{redeemedAmount} rachetée"
        available-text="{availableAmount} disponible"
      ></sqp-rewards-table-reward-column>
      <sqp-rewards-table-source-column
        column-title="Utilisateur"
        anonymous-user="Utilisateur Anonyme"
        deleted-user="Utilisateur Supprimé"
        reward-exchange-text="Échange de Récompenses"
        referral-text="{rewardSource, select, FRIEND_SIGNUP {Référence à} REFERRED {Référencé par} other {}}"
        reward-source-text="{rewardSource, select, MANUAL {Manuel} AUTOMATED {Automatique} other {}}"
      ></sqp-rewards-table-source-column>
      <sqp-rewards-table-status-column
        column-title="Statut"
        status-text="{status, select, AVAILABLE {Disponible} PENDING {Pendant} EXPIRED {Expiré} REDEEMED {Racheté} CANCELED {Annulé} other {Indisponible} }"
        expiry-text="Expire sur "
      ></sqp-rewards-table-status-column>
      <sqp-rewards-table-date-column column-title="Date de Réception"></sqp-rewards-table-date-column>
    </sqp-rewards-table>
  );
});
