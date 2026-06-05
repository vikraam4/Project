# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: TC001/registeration.e2e.spec.ts >> Registration >> TC001 - Create Account and Delete
- Location: src/TC001/registeration.e2e.spec.ts:15:7

# Error details

```
Test timeout of 30000ms exceeded.
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e5]:
      - link "Website for automation practice" [ref=e8] [cursor=pointer]:
        - /url: /
        - img "Website for automation practice" [ref=e9]
      - list [ref=e12]:
        - listitem [ref=e13]:
          - link " Home" [ref=e14] [cursor=pointer]:
            - /url: /
            - generic [ref=e15]: 
            - text: Home
        - listitem [ref=e16]:
          - link " Products" [ref=e17] [cursor=pointer]:
            - /url: /products
            - generic [ref=e18]: 
            - text: Products
        - listitem [ref=e19]:
          - link " Cart" [ref=e20] [cursor=pointer]:
            - /url: /view_cart
            - generic [ref=e21]: 
            - text: Cart
        - listitem [ref=e22]:
          - link " Signup / Login" [ref=e23] [cursor=pointer]:
            - /url: /login
            - generic [ref=e24]: 
            - text: Signup / Login
        - listitem [ref=e25]:
          - link " Test Cases" [ref=e26] [cursor=pointer]:
            - /url: /test_cases
            - generic [ref=e27]: 
            - text: Test Cases
        - listitem [ref=e28]:
          - link " API Testing" [ref=e29] [cursor=pointer]:
            - /url: /api_list
            - generic [ref=e30]: 
            - text: API Testing
        - listitem [ref=e31]:
          - link " Video Tutorials" [ref=e32] [cursor=pointer]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=e33]: 
            - text: Video Tutorials
        - listitem [ref=e34]:
          - link " Contact us" [ref=e35] [cursor=pointer]:
            - /url: /contact_us
            - generic [ref=e36]: 
            - text: Contact us
  - generic [ref=e39]:
    - generic [ref=e41]:
      - heading "Login to your account" [level=2] [ref=e42]
      - generic [ref=e43]:
        - textbox "Email Address" [ref=e44]
        - textbox "Password" [ref=e45]
        - button "Login" [ref=e46] [cursor=pointer]
    - heading "OR" [level=2] [ref=e48]
    - generic [ref=e50]:
      - heading "New User Signup!" [level=2] [ref=e51]
      - generic [ref=e52]:
        - textbox "Name" [ref=e53]
        - textbox "Email Address" [ref=e54]
        - button "Signup" [ref=e55] [cursor=pointer]
  - contentinfo [ref=e56]:
    - generic [ref=e61]:
      - heading "Subscription" [level=2] [ref=e62]
      - generic [ref=e63]:
        - textbox "Your email address" [ref=e64]
        - button "" [ref=e65] [cursor=pointer]:
          - generic [ref=e66]: 
        - paragraph [ref=e67]:
          - text: Get the most recent updates from
          - text: our site and be updated your self...
    - paragraph [ref=e71]: Copyright © 2021 All rights reserved
  - text: 
  - generic:
    - insertion:
      - generic:
        - iframe
  - insertion [ref=e72]:
    - iframe [ref=e75]:
      - iframe [ref=f8e1]:
        - generic [ref=f9e1]:
          - generic [ref=f9e2]:
            - generic:
              - img [ref=f9e6] [cursor=pointer]
              - button [ref=f9e8] [cursor=pointer]:
                - img [ref=f9e9]
          - insertion [ref=f9e16]:
            - iframe [ref=f9e17]:
              - link "Advertisement" [ref=f11e4] [cursor=pointer]:
                - /url: https://adclick.g.doubleclick.net/pcs/click?xai=AKAOjssU_iqVpVeZ2MitFr6HrO2FFwx20R37AXwREmY5C4KOLw105HCoVhVG1Qkp711rNFn2c9qOuVHaRH3xlYm_xFjy1w3_Fxge7LQ41gJmo7adOkzwTQFXuf8sKKNdCMiMnUldrAeKMSfPokrDvvQh_-b_L7BTIpPBC835eMzAGBA2NPNBrGf-t_X9JOoGokvgrs5E5MBB1lTIfewpI7p215yRNIhHJH3LwcY1mSDTbs6wQHWnAVqyJvlzMr5ZIrVu5__-JB-vmQZiuxXYpd3ZSA9Et61Iz3S_y6xKMwnTkbQckNchrzeNT8gcC5AH0fCOUjQJo6l__H96Wt7byq95Wr6-BQX5t-YQW2zJbfLk-KF9T0NOTo-Q6XnLvDF8hl_0LM5kzetp2nqiF2GAniw_GCcF4iX3_kom1Vuz0q69GPz0UWVoyyuD0JTTCFYZoFXJHrWeKJNJdG1ndKFHXEiVXYqTctIhmbvS3Jf0sPUdPj33Nn80HrIz3Tz_vxSd--76m_3igqgb2WVxoO867jeumupaKMJ8RHzKrM-RF65DJVdW&sai=AMfl-YQfYXVOCE0kpEEiocoFVJdA_k1xPQTOyrRq2Phk2SWiuHnNa0903y9DiWqgj8c5hH4iuXJDlV-pAtMeAtTkJ3FVhboFD08V2Cf6q0tTbraCE47SzCswv1WXOJafUNk4rNexNo9M3seqCELILfgQAyihgAfjf32m0wLeF_dA8SpkMbmoPA1MYb9wu40pt1pWE76-qBsf-WZFmqkNGrdOJHBwLOtCehQl4Vj08cBgrMt0rWWvN9Rt0zCNA9OmZpQgfjT84cl7DiO7-_KlJx43wyaofKt0RWKG58zwa6FtEylFrlYgK8agb9bzkloYELX5RCMfkiOmtZVXXGxLANaDgWSPinui4w&sig=Cg0ArKJSzD1RInkF-cil&cry=1&fbs_aeid=%5Bgw_fbsaeid%5D&urlfix=1&adurl=https://googleads.g.doubleclick.net/dbm/clk%3Fsa%3DL%26ai%3DCa3FKZhsjarGWOp2NjMwPwsPx-AW-34ulhwH-kfTv6xXwLhABIP20npUBYOXq4wOgAe7l3uIByAEJqQLiRE10aJ5GPqgDAcgDmwSqBIcCT9Cpm819RrtZUCY-jf5tmHiP4sB_ICgLEFROFWzStcc7ITVJ--0yci64qJXw4Kl19foSPj_HfIEywcVMhlF-SDK9798spRBoLXJlKSXkaO-M88i5mhTrupyZQzLN6kutS509pCr95lRl2i61Hxgu5JhLvqwOFbJcVoBBdQ8r68QS6JtoasMPJ_2ZHxSe8o0Ma6GQKyzdBSDtIgqVenuysEpiLUqXRzVeX588frVRxqeDpQGQRt5PJNZ_Mrzw4WOCBEuqkvCvxPGm2qaLTLNW6kLzdqZ3lLdDfEUGbfYj6w77LHl_z2D6jIOo1IaGtXFRpoXFRoRCk8s_Wxf5O1wSKps50Bkob-TABOi2-_eUBeAEA4gFjsvQrFOQBgGgBk2AB_qZoZ0CqAenzLECqAemvhuoB8zOsQKoB_PRG6gHltgbqAeqm7ECqAeOzhuoB5PYG6gH8OAbqAfulrECqAf-nrECqAevvrECqAfVyRuoB9m2sQKoB5oGqAf_nrECqAffn7ECqAf4wrECqAf7wrECqAfn17EC2AcA0ggzCIBhEAEYnwMyCIqCgICAgIAIOg-AQIDAgICAgKiAAqiDgBBIvf3BOliIvP6G4_CUA2ABgAoBmAsByAsBgAwBqg0CSU7qDRMIgOf-huPwlAMVnQaDAx3CYRxf8A0BiA4JsBOe8MUi2BMN2BQB0BUByhYCCgD4FgGAFwGyFwQYAlAGshgJEgLrThhNIgEA0BkB%26ae%3D1%26num%3D1%26cid%3DCAQSnwIAEQoqgcI_kiSOeyv7xCsq-Fr1y2mXXsp2RK7G5K4py84Mom8jaLreTsSWNm1s6hhFz70tp4UeLKKilhqV78s-ocF4TPrOi-Yg1CGDHu5vszqvYboThkj8CdctYC-miJkG9OBv-Jl1LatFX6Dj_zYkWXhZHE6FxCNfnUqB5ErmQc9wIUOk7fzZGH3hKRf_p1qAdSeJThWq2Q2M9yMeBX-kItSvrhoicKKeodEwI5HjjZd-DPbK3QHe3Q1bDPHyZj_d6o0IpBnTqA08KHIIUeJzi0UBfo9-HkhVBPNw-HaVwUXGhoegzR4nZxNrV2uUXPhZPOXHaXvD2kkUmSb14_sdhJA5l_KOXaegeN1uldNLVZaevCc3wjjrEGr3KIvGEhgB%26sig%3DAOD64_2q5SkOlfhnSaABm1LHIdO9XaxoBw%26client%3Dca-pub-1677597403311019%26dbm_c%3DAKAmf-AJVSJWQFNg6B1joI-D020A85OmvNjnFFIuzTtCGqgNI30n64j9IZU0IsjG5Qbx03RuND5YyqJYpjV1xn5t1GlpLIl7IdOV8d9t0sSLvf4krU4Oc0xbS3qr16wmT6IkD0PHC5QQrXTEXRKSWKUFuDb7rLkwM00YZp5UW4m0jIp133lhxyLU4jYvgq1Zsq1cKe_dAGfHefviXG2OlK55Qga_6ht3ahhbk_vbhKqIsWVSvGLp7afc4W8EHZqomPA-TgRuqBuhP_1MKnfMVR259QOZGIbGDWxuUKDZelzws2Blf52x-pc%26cry%3D1%26dbm_d%3DAKAmf-DJCDAfJtdgRJH7PjPORL5pHrs23HQZ3x2VoDNVFQjou0GmOz1ntxk1MLEAvbQR6FuYFWh2Ceo_g5m5tlgpfU1hofWCKqe9mfFxnJF9XHB6DxcwFLa4kW_944EExh76NsuORWJseLoNy3umccJ_iyPCl9X9_3_cGeL8bSH4rK7pbc1L7saxVyJcUGr2ouIjA-6wRqqZhNRoOBIBTVsxtCI00xS98Ly4FhEPFcI0WjFtDbFsK0ROU0pAnom0iB6HW2NiHFj_NUgKUm6RF5Dq1ZxnIHdmjXNfkctFtVnIqy7AqmVYcxImV2mc1XJ3NNqnSlP5LIZEwwLIjOVOKRY9OG7ths3njnWgABnXZ3qO3k-Snz6ov-fll8Y4jtQ8ajAXaNHS-exqn0oEl9TvKad-3oPGiG5fy0NgERCTn4OW63Add4_-U6NZtf5-7trkDGdTfoTdRTSrjKqEjEiCjutFKXtHicAbmbjrCtw1y1JpcCcp58Gzdg4zRchZthKcd2h2w8JTHK_j2Ytw7trRzreCEsK3AL1kyo9f0uRr6kLJ1Xx3cJlPXmXSD5zZJKN2szl-RarFl6twNXXISn3GXg-mwEqudfVDoxOxz7vpNO4NSQPGPdEg6pGTvVvtH5oRtDcnM3kqtWH-b9KRY3Aq5r7VCQLGzXIUkNVYMIxCjAOZuLxdfPFqBQJQl7FSYX9sAK4DMLU6GZp-6KlylIlC8krOIGQicVivvw%26adurl%3Dhttps://careers.unitedhealthgroup.com/search-jobs/%252523exetech/India/34088/1/2/1269750/22/79/50/2%253Fsrc%253DUNS-19965%2526utm_source%253Dyoptima.com%2526utm_medium%253Ddisplay%2526utm_campaign%253DIndia%2526utm_content%253Dniche_site%2526utm_term%253D437471295%2526ss%253Dpaid%2526dclid%253D%2525edclid!%2526gad_source%253D7%2526gad_campaignid%253D23406082744
                - img "Advertisement" [ref=f11e5]
```